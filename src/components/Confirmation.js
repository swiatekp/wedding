import React, { Component } from 'react';
import '../css/Confirmation.scss';

class Confirmation extends Component {
    state = {}
    render() {
        return (
            <div className="slider-container">
                <h3 className="confirmation-h3">Potwierdź przybycie</h3>
                <form className="confirmation-form" autoComplete="off">

                    <label htmlFor="name">Imię</label>
                    <input type="text" id="name" />

                    <label htmlFor="surname">Nazwisko</label>
                    <input type="text" id="surname" />

                    <p>Czy przybędziesz na wesele?</p>
                    <div>
                        <label className="radio-label">
                            <input type="radio" name="confirmation" value="true" />
                            Tak
                        </label>
                        <label>
                            <input type="radio" name="confirmation" value="false" />
                            Nie
                        </label>
                    </div>

                    <label htmlFor="companion">Osoba towarzysząca</label>
                    <input type="text" id="companion" />

                    <p>Czy osoba towarzysząca przybędzie na wesele?</p>
                    <div>
                        <label className="radio-label">
                            <input type="radio" name="confirmation" value="true" />
                            Tak
                        </label>
                        <label>
                            <input type="radio" name="confirmation" value="false" />
                            Nie
                        </label>
                    </div>
                    <label htmlFor="message">Twoja wiadomość</label>
                    <textarea id="message" placeholder="Twoja wiadomość"></textarea>

                    <label htmlFor="token">Token</label>
                    <input type="text" id="token" />


                    <button>Wyślij</button>
                    <button>Reset</button>
                </form>
            </div>
        );
    }
}

export default Confirmation;
