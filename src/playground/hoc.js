// Higher Order Component

import React, { Component } from 'react';
import ReactDOM from 'react-dom'


const Info = props => (
    <div>
        <h1>info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return props => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share</p>}
            <WrappedComponent { ...props } />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return props => (
        <div>
            {props.isAuthenticated  ? (<WrappedComponent {...props} />)
            :
            (<p>Please logn to view the info</p>)}
        </div>
    )
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='ss' />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='ss' />, document.getElementById("app"));