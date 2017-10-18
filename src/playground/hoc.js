// Higher Order Component

import React, { Component } from 'react';
import ReactDOM from 'react-dom'


const Info = props => (
    <div>
        <h1>info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = wrappedComponent => {
    return props => (
        <div>
            <p>
            </p>

        </div>
    )
};

ReactDOM.render(<Info info='ss' />, document.getElementById("app"));