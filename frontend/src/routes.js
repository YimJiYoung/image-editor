import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Editor from './pages/Editor';
import SignIn from './pages/SignIn';
import { pathUri } from './constants/path';

const routes = () => (
    <Switch>
        <Route path={pathUri.home} component={Editor} exact />
        <Route path={pathUri.signin} component={SignIn} />
        <Route component={() => <Redirect to={pathUri.home} />} />
    </Switch>
);

export default routes;