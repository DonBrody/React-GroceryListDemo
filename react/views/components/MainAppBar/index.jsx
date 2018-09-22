import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
          {props.cartList && props.cartList.length > 0 && (
            <Badge badgeContent={props.cartList.length} color="error">
              <ShoppingCart style={{ color: 'white' }} />
            </Badge>
          )}
          {(!props.cartList || props.cartList.length === 0) && (
            <ShoppingCart style={{ color: 'white' }} />
          )}
        </IconButton>
      </Link>
    </div>
  </AppBar>
);

function mapStateToProps(state) {
  return {
    cartList: state.cartList,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(MainAppBar));
