import React from 'react';
import '../css/Approach.scss';
import { Switch, Route } from 'react-router-dom';
import ApproachMain from './ApproachMain.js';
import ApproachChurch from './ApproachChurch.js';
import ApproachParty from './ApproachParty.js';
import '../css/Approach.scss'; //Contains styles for each Route

const Approach = (props) => {
    return (
        <Switch>
            <Route exact={true} path="/approach/" component={ApproachMain}></Route>
            <Route path="/approach/church/" render={() => (<ApproachChurch showImage={props.showImage} />)}></Route>
            <Route path="/approach/party" render={() => (<ApproachParty showImage={props.showImage} />)}></Route>
        </Switch>
    );
}

export default Approach;