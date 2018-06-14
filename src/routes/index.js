import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppWrapper from '../components/AppWrapper';
import HomePage from '../components/HomePage/';

export default(
  <Route path='/' component={AppWrapper}>
    <IndexRoute component={HomePage}/>
  </Route>
);
