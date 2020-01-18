import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { Help } from '../pages/Help';

export const Content = props => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                render={props => (<Landing />)}
            />
            <Route
                exact={true}
                path="/help"
                render={props => (<Help />)}
            />
        </Switch>
    );
}