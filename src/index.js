import React from 'react';
import {Route} from 'react-router';
import PropTypes from 'prop-types';

let loadRoute = (name, cb = () => {
}) => {
    throw 'Specify Route loader function. Use {defineLoader} method';
};

export const defineLoader = (func) => {
    loadRoute = func;
};

export default class BundleRoute extends Route {
    constructor(...args) {
        super(...args);
        this.state = {
            match: this.computeMatch(this.props, this.context.router),
            component: null
        };
    }

    loadRoute(file) {
        loadRoute(file, (loadedFile) => {
            this.setState({component: loadedFile.default});
        });
    }

    componentWillMount() {
        if (this.props.file) {
            this.loadRoute(this.props.file);
        } else {
            super.componentWillMount();
        }
    }

    componentWillReceiveProps(nextProps, ...args) {
        super.componentWillReceiveProps(nextProps, ...args);
        this.loadRoute(nextProps.file);
    }

    render() {
        return this.state.component ? React.createElement(this.state.component, this.props) : super.render();
    }
}

BundleRoute.propTypes = Object.assign({file: PropTypes.string}, Route.propTypes);

BundleRoute.defaultProps = {
    file: '',
    component: () => null
};

