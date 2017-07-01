import React from 'react';
import {Router, Switch, Redirect} from 'react-router';
import {createBrowserHistory} from 'history';
import Route, {defineLoader} from 'react-bundle-router';

defineLoader((name, cb) => {
    require('./pages/' + name + '.jsx')(cb);
});

class Root extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path="/about" file="about" />
                    <Route path="/" file="home" />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        );
    }
}

export default () => {
    return (<Root />);
};
