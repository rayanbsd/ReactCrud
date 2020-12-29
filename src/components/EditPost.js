import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPost } from "../actions/postActions";

class EditPost extends Component {
  post = this.props.history.location.state.post;
  constructor(props) {
    super(props);
    this.state = {
      title: this.post.title,
      content: this.post.content,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

    console.log("aaa", e.target.name);
  }

  onSubmit(e) {
    e.preventDefault();

    /*   console.log(post);
    console.log(this.props.match.params.id); */
    this.props.editPost(this.state, this.props.match.params.id);
    this.props.history.push("/posts/");
  }
  render() {
    return (
      <div className="Edit">
        <h1>Edit</h1>
        <h2>{this.props.match.params.id}</h2>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="standard-basic"
            label="Title"
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />

          <br />

          <br />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={4}
            variant="outlined"
            name="content"
            onChange={this.onChange}
            value={this.state.content}
          />

          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="buttonEdit"
          >
            Edit
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
          <h2>dqmslkd</h2>
        </form>
      </div>
    );
  }
}
EditPost.propTypes = {
  editPost: PropTypes.func.isRequired,
};

export default connect(null, { editPost })(EditPost);
