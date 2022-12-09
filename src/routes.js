import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './containers/Home'
import Comandas from './containers/Comandas'


function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/comandas" component={Comandas} />
            </Switch>
        </Router>
    )
}




export default Routes