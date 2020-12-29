import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";



const useStyles = withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles;

  return (
    <div className={classes.root}>
     
       
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>

            <Typography variant="h6" className={classes.title}>
              <Link to="/" className="NavHome">Home</Link>
            </Typography>

            <Typography variant="h6" className={classes.title}>
              <Link to="/posts" className="NavHome">posts</Link>
            </Typography>
          </Toolbar>
        </AppBar>
       
     
    </div>
  );
}
