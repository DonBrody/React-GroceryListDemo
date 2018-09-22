import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

import BuyList from '../../components/BuyList';

import * as actions from '../../../redux/actions';

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
  },
  addButtonIcon: {
    color: 'white',
    marginRight: 8,
  },
};

class InputList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputItem: '',
      errorMsg: null,
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
  }

  onAddItem() {
    const { inputItem } = this.state;
    if (this.state.inputItem.length === 0) {
      this.setState({ errorMsg: 'Please enter an item to add.' });
    } else if (this.props.buyList.indexOf(inputItem) >= 0) {
      this.setState({ errorMsg: `You already have ${inputItem} in your grocery list.` });
    } else if (this.props.cartList.indexOf(inputItem) >= 0) {
      this.setState({ errorMsg: `You already have ${inputItem} in your cart.` });
    } else {
      this.props.addItemToBuyList(this.state.inputItem);
      this.setState({ inputItem: '' });
    }
  }

  onAddItemToCart(item) {
    this.props.addItemToCart(item);
    this.props.removeItemFromBuyList(item);
  }

  render() {
    const { classes } = this.props;

    return (
      <article className={classes.wrapper}>
        <section style={{ marginBottom: 40 }}>
          <TextField
            label="Grocery item"
            value={this.state.inputItem}
            onChange={(e) => { this.setState({ inputItem: e.target.value }); }}
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.onAddItem}
            fullWidth
          >
            <AddCircleOutline className={classes.addButtonIcon} />
            Add Item To Buy List
          </Button>
        </section>
        <section>
          <BuyList onAddItemToCart={this.onAddItemToCart} />
        </section>
        <aside>
          <Snackbar
            open={this.state.errorMsg}
            message={this.state.errorMsg}
            autoHideDuration={10000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={() => { this.setState({ errorMsg: null }); }}
          />
        </aside>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    buyList: state.buyList,
    cartList: state.cartList,
  };
}

export default connect(mapStateToProps, actions)(withStyles(styles)(InputList));
