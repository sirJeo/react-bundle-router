##Motivation

When you create React project and use Webpack as module bundler, you can face with an issue. Different project routes pack to the same file. Using webpack bundle-loader doesn't solve this issue.

##What is this?

Module extend React Route and create abbility to load bundles only when route should be rendered. 

##How to use

All files that will be splitted to bundles should be placed on the same directory (ex. `/routes/`)

Setup webpack config, to create bundles (https://github.com/webpack-contrib/bundle-loader)

Instead of using `Route (react-router)` component import 'react-bundle-router'

```
// index.jsx

import React from 'react';
import {Router, Switch, Redirect} from 'react-router';
import {createBrowserHistory} from 'history';
import BundleRoute from  'react-bundle-router'

export default class Root extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <BundleRoute path="/about" file="about" />
                    <BundleRoute path="/" file="home" />
                </Switch>
            </Router>
        );
    }
}
```

You should specify Route Loader function

```
import {defineLoader} from  'react-bundle-router'

defineLoader((name, cb) => {
    require('./routes/' + name + '.jsx')(cb); 
});

```

Copy-paste loader above to your project with updated path. !Important. Do not change `require` argument format. It should be string(path) + variable(filename) + string(ext). 
