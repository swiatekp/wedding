import Info from './components/Info.js';
import Confirmation from './components/Confirmation.js';
import Contact from './components/Contact.js';

const pagelist = () => {
    return (
        [
            {
                name: "Czas i miejsce",
                path: "/",
                exact: true,
                className: "info-icon",
                component: Info
            },
            {
                name: "Potwierdź przybycie",
                path: "/confirm",
                exact: false,
                className: "confirm-icon",
                component: Confirmation
            },
            {
                name: "Kontakt",
                path: "/contact",
                exact: false,
                className: "contact-icon",
                component: Contact
            }
        ]
    );
}

export default pagelist;