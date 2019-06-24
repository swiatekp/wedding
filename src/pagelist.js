import Info from './components/Info.js';
import Confirmation from './components/Confirmation.js';
import Contact from './components/Contact.js';

const pagelist = () => {
    return (
        [
            {
                id: 0,
                name: "Czas i miejsce",
                path: "/",
                exact: true,
                className: "info-icon",
                component: Info,
                componentName: "Info",
            },
            {
                id: 1,
                name: "Potwierdź przybycie",
                path: "/confirm",
                exact: false,
                className: "confirm-icon",
                component: Confirmation,
                componentName: "Confirmation",
            },
            {
                id: 2,
                name: "Kontakt",
                path: "/contact",
                exact: false,
                className: "contact-icon",
                component: Contact,
                componentName: "Confirmation",
            }
        ]
    );
}

export default pagelist;