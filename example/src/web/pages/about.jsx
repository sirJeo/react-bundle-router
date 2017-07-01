import React from 'react';
import {Link} from 'react-router-dom';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <Link to="/home">Homepage</Link>
            </div>
        );
    }
}
