import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Main from './views';
import reducers from './redux/reducers';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFF' },
    accent: { main: '#FF4081' },
    error: { main: '#F44336' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-container'),
);
