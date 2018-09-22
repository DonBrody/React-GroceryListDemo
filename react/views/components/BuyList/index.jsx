import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { AddShoppingCart } from '@material-ui/icons';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

const styles = theme => ({
  listItemButton: {
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
  listItemIcon: {
    color: theme.palette.accent.main,
  },
});

const BuyList = props => (
  <List>
    {props.buyList && props.buyList.map(item => (
      <ListItem>
        <ListItemText primary={item} />
        <ListItemSecondaryAction>
          <IconButton
            className={props.classes.listItemButton}
            onClick={() => { props.onAddItemToCart(item); }}
          >
            <AddShoppingCart className={props.classes.listItemIcon} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

function mapStateToProps(state) {
  return {
    buyList: state.buyList,
  };
}

BuyList.propTypes = {
  onAddItemToCart: PropTypes.func.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(BuyList));
