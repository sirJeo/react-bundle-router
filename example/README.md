##react-bundle-router usage example

To correct work you should configure webpack bundle-loader. It should create different bundles for each route.
  
```javascript
// webpack.config.js
// ...
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'bundle-loader!babel-loader',
                include: [path.resolve(__dirname, './src/web/pages')]
            },
            // ...
        ]
    },
// ...
```

Webpack will create different bundle containers for each file from specified directory.

Specify Route Loader function:

```javascript
import {defineLoader} from  'react-bundle-router'

defineLoader((name, cb) => {
    require('./pages/' + name + '.jsx')(cb); 
});

```
Copy-paste loader above to your project with updated path. **Important**: Do not change `require` argument format. It should be **string(path) + variable(filename) + string(ext)**.
 
Now you can use react-bundle-router component to describe routes:
```javascript
import Route from  'react-bundle-router'

//...
    <Route path="/about" file="about" />
    <Route path="/" file="home" />
//...

```
Define `file` property (filename from bundled directory) instead of `component` class.

Done! Every route bundle will be loaded only it is needed. 

###To run example

`npm install` or `yarn install` \
`node .`

