import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';
import Header from "components/Header/Header";
import {Container} from "@material-ui/core";

ReactDOM.render(
  <BrowserRouter>
    <Container className="container">
      <Header />
      <Switch>
        {routes.map((route, index) => (<Route key={index} {...route} />))}
      </Switch>
    </Container>
  </BrowserRouter>,
  document.getElementById('root'),
);
