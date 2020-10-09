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
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Container className="container">
            <Header />
            <Switch>
              {routes.map((route, index) => (<Route key={index} {...route} />))}
            </Switch>
          </Container>
        </BrowserRouter>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
