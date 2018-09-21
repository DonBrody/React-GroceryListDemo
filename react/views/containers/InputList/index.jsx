import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

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
  }

  onAddItem() {
    if (this.state.inputItem.length === 0) {
      this.setState({ errorMsg: 'Please enter an item to add.' });
    } else {
      const item = this.state.inputItem;
      this.setState({ errorMsg: item });
    }
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
          To buy list
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

export default withStyles(styles)(InputList);
