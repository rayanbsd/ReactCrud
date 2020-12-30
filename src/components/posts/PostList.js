import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postActions";
import TextField from "@material-ui/core/TextField";
import PostForm from "./Postform";
import { fetchPosts } from "../../actions/postActions";
import PostItem from "./PostItem";
import "./Posts.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      filteredPosts: [],
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      filteredPosts: props.posts,
    });
  }

  render() {
    const onSearchChange = e => {
      const filteredPosts = this.props.posts.filter(post => {
        return (
          post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          post.content.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });

      this.setState({ filteredPosts: filteredPosts });
    };

    return (
      <div>
        <PostForm />
        <h1>Posts</h1>
        <div className="search-field-wrapper">
          <TextField
            className="search-field"
            id="standard-basic"
            label="Search for a post"
            type="text"
            name="title"
            onChange={onSearchChange}
          />
        </div>
        {this.props.posts.length > 0 ? 
          this.state.filteredPosts.map(post => 
            <PostItem key={post._id} post={post} />
          )
         : 
          <div>no posts</div>
        }
      </div>
    );
  }
}

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
  };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostList);
