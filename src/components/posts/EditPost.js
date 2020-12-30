import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPost } from "../../actions/postActions";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.history.location.state.post.title,
      content: this.props.history.location.state.post.content,
    };
  }
  
  render() {
    const cancel = () => {
      this.props.history.push("/");
    };

    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
      e.preventDefault();
      this.props.editPost(this.state, this.props.match.params.id);
      this.props.history.push("/");
    };

    return (
      <div className="Edit">
        <h1>Edit</h1>
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
            variant="outlined"
            name="content"
            onChange={onChange}
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
          <Button variant="contained" color="secondary" onClick={cancel}>
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}
EditPost.propTypes = {
  editPost: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(null, { editPost })(EditPost);
