import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Enrollment from '../pages/Enrollment';
import Help from '../pages/Help';
import Plan from '../pages/Plan';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/help" component={Help} isPrivate />
      <Route path="/plan" component={Plan} isPrivate />
    </Switch>
  );
}
