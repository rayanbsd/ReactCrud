import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const useStyles = withStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const classes = useStyles;

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  render() {
   const onChange=e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
   const onSubmit=e => {
      e.preventDefault(); 
      const post = {
        title: this.state.title,
        content: this.state.content,
      };
  
      this.props.createPost(post);
      this.setState({ title: "", content: "" });
    }

    return (
      <div className={classes.root}>
        <h1>Add Post</h1>
        <form onSubmit={onSubmit}>
          <TextField
            id="standard-basic"
            label="Title"
            type="text"
            name="title"
            onChange={onChange}
            value={this.state.title}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={4}
            fullWidth="true"
            variant="outlined"
            name="content"
            onChange={onChange}
            value={this.state.content}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Add Post
          </Button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
