import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';
import Header from "components/Header/Header";
import {Container} from "@material-ui/core";

import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container className="container">
        <Header />
        <Switch>
          {routes.map((route, index) => (<Route key={index} {...route} />))}
        </Switch>
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
