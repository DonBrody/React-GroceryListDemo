import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = {
  paper: {
    padding: 40,
    height: 300,
  },
  header: {
    textAlign: 'center',
    marginTop: 50,
  },
};

const Error = props => (
  <Paper className={props.classes.paper} elevation={5}>
    <h1 className={props.classes.header}>{'Oops! That page couldn\'t be found.'}</h1>
  </Paper>
);

export default withStyles(styles)(Error);
