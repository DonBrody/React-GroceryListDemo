import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { RemoveShoppingCart } from '@material-ui/icons';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
} from '@material-ui/core';

const styles = theme => ({
  listItemButton: {
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
  listItemIcon: {
    color: theme.palette.error.main,
  },
  emptyListFeedback: {
    textAlign: 'center',
    color: '#555',
  },
});

const CartList = props => (
  <Paper style={{ padding: 20 }} elevation={5}>
    {props.cartList && props.cartList.length > 0 && (
      <List>
        {props.cartList.map(item => (
          <ListItem>
            <ListItemText primary={item} />
            <ListItemSecondaryAction>
              <Tooltip title={`Remove ${item} from cart`}>
                <IconButton
                  className={props.classes.listItemButton}
                  onClick={() => { props.onRemoveItemFromCart(item); }}
                >
                  <RemoveShoppingCart className={props.classes.listItemIcon} />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    )}
    {(!props.cartList || props.cartList.length === 0) && (
      <h5 className={props.classes.emptyListFeedback}>No items in shopping cart.</h5>
    )}
  </Paper>
);

function mapStateToProps(state) {
  return {
    cartList: state.cartList,
  };
}

CartList.propTypes = {
  onRemoveItemFromCart: PropTypes.func.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(CartList));
