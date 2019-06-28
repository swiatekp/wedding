import React from 'react';
import '../css/Approach.scss';
import { Switch, Route } from 'react-router-dom';
import ApproachMain from './ApproachMain.js';
import ApproachChurch from './ApproachChurch.js';
import ApproachParty from './ApproachParty.js';
import '../css/Approach.scss'; //Contains styles for each Route

const Approach = () => {
    return (
        <Switch>
            <Route exact={true} path="/approach/" component={ApproachMain}></Route>
            <Route path="/approach/church/" component={ApproachChurch}></Route>
            <Route path="/approach/party" component={ApproachParty}></Route>
        </Switch>
    );
}

export default Approach;