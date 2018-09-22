import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = {
  paper: {
    padding: 40,
  },
  header: {
    textAlign: 'center',
    color: '#555',
  },
};

const Error = props => (
  <Paper className={props.classes.paper} elevation={5}>
    <h2 className={props.classes.header}>{'Oops! That page couldn\'t be found.'}</h2>
  </Paper>
);

export default withStyles(styles)(Error);
