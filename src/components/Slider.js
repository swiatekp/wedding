import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";
import '../css/Slider.scss';
import pagelist from '../pagelist.js';

const Slider = (props) => {
    const list = pagelist();
    const dots = list.map((dot, key) => (
        <NavLink key={key} exact={dot.exact} className="slider-dot" to={dot.path}>{dot.pagename}</NavLink>
    ));
    const routes = list.map((route, key) => (
        <Route key={key} path={route.path} component={route.component} />
    ))

    return (
        <main>
            <NavLink className="slider-button" to="/">&lt;</NavLink>
            <article className="main-content">
                <SwipeableRoutes>
                    {routes}
                </SwipeableRoutes>
                <div className="dots-container">
                    {dots}
                </div>
            </article>
            <NavLink className="slider-button" to="/contact">&gt;</NavLink>
        </main>
    );
}
export default Slider;