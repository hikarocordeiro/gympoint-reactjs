import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import EnrollmentList from '~/pages/Enrollment/EnrollmentList';
import Help from '~/pages/Help';

import PlanList from '~/pages/Plan/PlanList';
import PlanForm from '~/pages/Plan/PlanForm';

import StudentList from '~/pages/Student/StudentList';
import StudentForm from '~/pages/Student/StudentForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student" exact component={StudentList} isPrivate />
      <Route path="/student/register" component={StudentForm} isPrivate />
      <Route path="/student/:id/edit" component={StudentForm} isPrivate />

      <Route path="/enrollment" exact component={EnrollmentList} isPrivate />

      <Route path="/help" component={Help} isPrivate />

      <Route path="/plan" exact component={PlanList} isPrivate />
      <Route path="/plan/register" component={PlanForm} isPrivate />
      <Route path="/plan/:id/edit" component={PlanForm} isPrivate />
    </Switch>
  );
}
