import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { AddShoppingCart } from '@material-ui/icons';
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
    color: theme.palette.accent.main,
  },
  emptyListFeedback: {
    textAlign: 'center',
    color: '#555',
  },
});

const BuyList = props => (
  <Paper style={{ padding: 20 }} elevation={5}>
    {props.buyList && props.buyList.length > 0 && (
      <List>
        {props.buyList && props.buyList.map(item => (
          <ListItem>
            <ListItemText primary={item} />
            <ListItemSecondaryAction>
              <Tooltip title={`Add ${item} to cart`}>
                <IconButton
                  className={props.classes.listItemButton}
                  onClick={() => { props.onAddItemToCart(item); }}
                >
                  <AddShoppingCart className={props.classes.listItemIcon} />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    )}
    {(!props.buyList || props.buyList.length === 0) && (
      <h5 className={props.classes.emptyListFeedback}>No items in grocery list.</h5>
    )}
  </Paper>
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
