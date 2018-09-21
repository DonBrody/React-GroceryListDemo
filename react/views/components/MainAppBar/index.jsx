import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Badge } from '@material-ui/core';
import { Home, ShoppingCart } from '@material-ui/icons';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  routeButton: {
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
};

const MainAppBar = props => (
  <AppBar position="fixed">
    <div className={props.classes.container}>
      <Link to="/" push>
        <IconButton className={props.classes.routeButton} style={{ marginLeft: 10 }}>
          <Home style={{ color: 'white' }} />
        </IconButton>
      </Link>
      <Link to="/cart" push>
        <IconButton className={props.classes.routeButton} style={{ marginRight: 10 }}>
          <Badge badgeContent={2} color="error">
            <ShoppingCart style={{ color: 'white' }} />
          </Badge>
        </IconButton>
      </Link>
    </div>
  </AppBar>
);

export default withStyles(styles)(MainAppBar);
