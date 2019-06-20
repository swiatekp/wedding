import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Info from './Info.js';
import Confirmation from './Confirmation.js';
import Contact from './Contact.js';
import Error404 from './Error404.js';
import '../css/Slider.scss';
import pagelist from '../pagelist.json';

const Content = () => {
    const dots = pagelist.map((dot, key) => (
        <NavLink key={key} exact={dot.exact} className="slider-dot" to={dot.path}>{dot.pagename}</NavLink>
    ));
    return (
        <main>
            <button className="slider-button">&lt;</button>
            <article className="main-content">
                <Switch>
                    <Route exact path="/" component={Info} />
                    <Route path="/confirm" component={Confirmation} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Error404} />
                </Switch>
                <div className="dots-container">
                    {dots}
                </div>
            </article>
            <button className="slider-button">&gt;</button>
        </main>
    );
}
export default Content;