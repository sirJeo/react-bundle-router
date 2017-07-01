##Motivation

When you create React project and use Webpack as module bundler, you can face with an issue that different project routes pack to the same file. Using webpack bundle-loader doesn't solve this issue.

##What is this?

Module extend React Route and create abbility to load bundles only when route should be rendered. 

## Module install

`npm -i react-bundle-router`\
`yarn add react-bundle-router`

##How to use

All files that will be splitted to bundles should be placed on the same directory (ex. `/routes/`)

Setup webpack config, to create bundles (https://github.com/webpack-contrib/bundle-loader)

Instead of using `Route (react-router)` component import 'react-bundle-router'

```javascript
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
BundleRoute should be declared with `file` property. This is string property that should contain component filename. This file will be loaded when `path` will be match to `location.pathname`

##Module setup

You should specify Route Loader function

```javascript
import {defineLoader} from  'react-bundle-router'

defineLoader((name, cb) => {
    require('./routes/' + name + '.jsx')(cb); 
});

```

Copy-paste loader above to your project with updated path. **Important**: Do not change `require` argument format. It should be **string(path) + variable(filename) + string(ext)**. 

##Example of usage

https://github.com/sirJeo/react-bundle-router/example