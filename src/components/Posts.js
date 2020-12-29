import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { deletePost } from "../actions/postActions";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import PostForm from "./Postform";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = withStyles({
  root: {
    minWidth: 275,
  },
  
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const classes = useStyles;

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };

    this.postDelete = this.postDelete.bind(this);
    
  }
  componentWillMount() {
    this.props.fetchPosts();
  }

  postDelete(post) {
    console.log(post._id);
    this.props.deletePost(post._id);
  }
  editPoste(post){
    this.props.history.push('/editpost/'+post._id, {
   
      post: post
    })
  }

  render() {

    return (
      <div>
        <PostForm />
        <h1>Posts</h1>
        {this.props.posts.length > 0 ? (
          this.props.posts.map((post) => (
            <div key={post._id}>
              <Card className={classes.root}>
              <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
          </Typography>
        </CardContent>
      </CardActionArea>
       
          
                <CardActions>
                  <Button color="primary" onClick={()=>this.editPoste(post)}>Edit</Button>
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
  
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);


