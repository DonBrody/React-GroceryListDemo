import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import CartList from '../../components/CartList';

import * as actions from '../../../redux/actions';

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
  },
};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onRemoveItem(item) {
    this.props.addItemToBuyList(item);
    this.props.removeItemFromCart(item);
  }

  render() {
    const { classes } = this.props;

    return (
      <article className={classes.wrapper}>
        <section>
          <CartList onRemoveItemFromCart={this.onRemoveItem} />
        </section>
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

export default connect(mapStateToProps, actions)(withStyles(styles)(Cart));
