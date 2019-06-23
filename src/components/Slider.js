import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Info from './Info.js';
import Confirmation from './Confirmation.js';
import Contact from './Contact.js';
import Error404 from './Error404.js';
import '../css/Slider.scss';
import pagelist from '../pagelist.js';

const Content = () => {
    const dots = pagelist().map((dot, key) => (
        <NavLink key={key} exact={dot.exact} className="slider-dot" to={dot.path}>{dot.pagename}</NavLink>
    ));
    const routes = pagelist().map((route, key) => (
        <Route key={key} exact={route.exact} path={route.path} component={route.component} />
    ))
    console.log(pagelist());
    return (
        <main>
            <button className="slider-button">&lt;</button>
            <article className="main-content">
                <Switch>
                    {routes}
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