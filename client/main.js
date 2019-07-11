import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import {BinsMain} from './components/bins/bins.main'
import BinsMain from './components/bins/bins.main'
import BinsList from './components/bins/bins.list'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const routes = (
  <BrowserRouter>
    <App/>
      <Switch>
        <Route exact path = "/" component={BinsList}/>
        <Route path = "/bins/:binId" component={BinsMain}/>
      </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
