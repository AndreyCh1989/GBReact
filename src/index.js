import React from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';
import Header from "components/Header/Header";
import {Container} from "@material-ui/core";

import {Provider} from 'react-redux';

import {initStore, history} from './store';

const {store, persistor} = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Container className="container">
          <Header />
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map((route, index) => (<Route key={index} {...route} />))}
            </Switch>
          </ConnectedRouter>
        </Container>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
