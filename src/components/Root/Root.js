import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Error from '../Error/404';
import { createBrowserHistory } from 'history';
import MasterLayout from './../Layout/MasterLayout';
const history = createBrowserHistory();

const Root = (props) => {
    const { routes, paths } = props,
        path = window.location.pathname || '';
    return (
        <div className="wrapper p-R">
            <MasterLayout logoUrl={''}>
                <Suspense fallback={<h1>Loading....  </h1>}>
                    <Router history={history}>
                        <Switch>
                            {paths.map((pathMap, i) => {
                                if (path in routes) {
                                    if (pathMap != "") {
                                        const Component = routes[path];
                                        return <Component key={pathMap} {...props} />
                                    }
                                } else {
                                    return <Route key={pathMap} component={Error} />
                                }
                            })}
                        </Switch>
                    </Router>
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default Root;
