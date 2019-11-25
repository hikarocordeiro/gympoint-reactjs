import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Enrollment from '~/pages/Enrollment';
import Help from '~/pages/Help';
import Plan from '~/pages/Plan';
import StudentList from '~/pages/Student/StudentList';
import StudentForm from '~/pages/Student/StudentForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student" exact component={StudentList} isPrivate />
      <Route path="/student/register" component={StudentForm} isPrivate />
      <Route path="/student/:id/edit" component={StudentForm} isPrivate />

      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/help" component={Help} isPrivate />
      <Route path="/plan" component={Plan} isPrivate />
    </Switch>
  );
}
