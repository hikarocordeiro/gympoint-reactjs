import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/enrollment" component={Enrollment} />
      <Route path="/help" component={Help} />
      <Route path="/plan" component={Plan} />
    </Switch>
  );
}
