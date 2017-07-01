import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/about">About page</Link>
            </div>
        );
    }
}
