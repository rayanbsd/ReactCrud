import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
const useStyles = withStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const classes = useStyles;
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This Section is on devolepement Check Posts</h1>
        <div className={classes.root}>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </div>
      </div>
    );
  }
}

export default App;
