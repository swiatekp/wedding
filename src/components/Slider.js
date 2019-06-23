import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";
import '../css/Slider.scss';
import pagelist from '../pagelist.js';


const Slider = () => {
    const list = pagelist();
    const dots = list.map((dot, key) => (
        <NavLink key={key} exact={dot.exact} className="slider-dot" to={dot.path}>{dot.pagename}</NavLink>
    ));
    const routes = list.map((route, key) => (
        <Route key={key} path={route.path} component={route.component} />
    ))
    const sliderButtonBack = list.map((route, key) => {
        let index = null;
        if (route.id === 0) {
            index = list.length - 1;
        }
        else {
            index = route.id - 1;
        }
        return (
            <Route exact={route.exact} key={key} path={route.path} render={() => (
                <NavLink className="slider-button" to={list[index].path}>&lt;</NavLink>
            )} />
        )
    });
    const sliderButtonForward = list.map((route, key) => {
        let index = null;
        if (route.id === list.length - 1) {
            index = 0;
        }
        else {
            index = route.id + 1;
        }
        return (
            <Route exact={route.exact} key={key} path={route.path} render={() => (
                <NavLink className="slider-button" to={list[index].path}>&gt;</NavLink>
            )} />
        )
    });
    return (
        <main>
            <Switch>
                {sliderButtonBack}
            </Switch>
            <article className="main-content">
                <SwipeableRoutes>
                    {routes}
                </SwipeableRoutes>
                <div className="dots-container">
                    {dots}
                </div>
            </article>
            <Switch>
                {sliderButtonForward}
            </Switch>
        </main>
    );
}
export default Slider;