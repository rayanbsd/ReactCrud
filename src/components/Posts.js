import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { deletePost } from "../actions/postActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import PostForm from "./Postform";
import store from "./../store";
import "./posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      filteredPosts: [],
    };
    store.subscribe(() => {
      this.setState({
        filteredPosts: store.getState().posts.posts,
      });
    });

    this.postDelete = this.postDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  postDelete(post) {
    this.props.deletePost(post._id);
  }
  editPoste(post) {
    this.props.history.push("/editpost/" + post._id, {
      post: post,
    });
  }

  render() {
    console.log(store.getState().posts.posts);
    const onSearchChange = (e) => {
      const filteredPosts = this.props.posts.filter((post) => {
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

        {this.props.posts.length > 0 ? (
          this.state.filteredPosts.map((post) => (
            <div key={post._id}>
              <Card className="root">
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {post.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button color="primary" onClick={() => this.editPoste(post)}>
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => this.postDelete(post)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))
        ) : (
          <div>no posts</div>
        )}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
