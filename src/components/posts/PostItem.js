import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Posts.css";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const postDelete = (post) => {
      this.props.deletePost(post._id);
    };

    const postEdit = (post) => {
      this.props.history.push("/editpost/" + post._id, {
        post: post,
      });
    };

    const { post } = this.props;
    
    return (
      <div>
        <div key={post._id}>
          <Card className="root">
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
              <Button color="primary" onClick={() => postEdit(post)}>
                Edit
              </Button>
              <Button color="secondary" onClick={() => postDelete(post)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { deletePost })(PostItem);
