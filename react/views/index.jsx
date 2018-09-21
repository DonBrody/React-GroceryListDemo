import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import MainAppBar from './components/MainAppBar';
import Footer from './components/Footer';
import InputList from './containers/InputList';
import Cart from './containers/Cart';
import Error from './containers/Error';

const Main = () => (
  <div>
    <header role="banner">
      <MainAppBar />
    </header>

    <main className="container" style={{ marginTop: 80, marginBottom: 25 }} role="main">
      <Switch>
        <Route exact path="/" component={InputList} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/" component={Error} />
      </Switch>
    </main>

    <footer className="container">
      <Footer />
    </footer>
  </div>
);

export default Main;
