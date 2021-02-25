import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRoute = (props) => {
    if (!localStorage.getItem('donsspecialtoken')) {
        return <Redirect to='/blogs'></Redirect>;
    }

    return (
        <Route
            path={props.path}
            exact={props.exact}
            component={props.component}
        ></Route>
    );
};

export default PrivateRoute;
