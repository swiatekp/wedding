import React, { Component } from 'react';
import '../css/Confirmation.scss';

class Confirmation extends Component {
    state = {
        name: '',
        surname: '',
        confirmed: false,
        companion: '',
        companionConfirmed: false,
        message: '',
        token: '',
        currentError: '',
    }
    setCurrentError = err => {
        this.setState({
            currentError: err
        })
        setTimeout(() => {
            this.setState({
                currentError: ''
            })
        }, 2000)
    }
    isValid = target => {
        console.log(target.tagName);
        if (target.type === "text" || target.tagName === "TEXTAREA") {
            if (target.classList.contains('name')) {
                if (target.value.length <= 30) {
                    const regEx = /^[a-zęóąśłżźćń ]+$/i;
                    if (regEx.test(target.value)) {
                        return true;
                    }
                    else {
                        this.setCurrentError('W tym polu można wpisać jedynie litery i spacje');
                    }
                    return false;
                }
                else {
                    this.setCurrentError('Długość tekstu w tym polu nie może przekraczać 30 znaków');
                }
                return false;
            }
            else if (target.id === "token") {
                const regEx = /^[a-zęóąśłżźćń0-9]{0,6}$/i;
                if (regEx.test(target.value)) {
                    return true;
                }
                else {
                    this.setCurrentError('Token składa się z sześciu znaków - cyfr i liter.');
                }
                return false;
            }
            else if (target.id === "message") {
                if (target.value.length <= 500) {
                    console.log(target.value.length);
                    const regEx = /^[a-zęóąśłżźćń0-9!#&*()-_=+;:]+$/;
                    if (regEx.test(target.value)) {
                        return true;
                    }
                    else {
                        this.setCurrentError('Użyto niedozwolonego znaku');
                    }
                    return false;
                }
                else {
                    this.setCurrentError('Długość wiadomości nie może przekroczyć 500 znaków.')
                    return false;
                }
            }
        }
        else if (target.type === "radio") {
            if (target.value === "true" || target.value === "false") {
                return true;
            }
            return false;
        }
    }
    changeHandler = e => {
        if (this.isValid(e.target)) {
            const newState = {}
            if (e.target.type === "radio") {
                let value = null;
                if (e.target.value === "true") {
                    value = true;
                }
                else {
                    value = false;
                }
                newState[e.target.name] = value;
                this.setState(newState);
            }
            else {
                newState[e.target.id] = e.target.value;

                this.setState(newState);
            }
        }
    }
    render() {
        const { name, surname, companion, companionConfirmed, message, token } = this.state;
        return (
            <div className="slider-container">
                {
                    this.state.currentError === "" ? null : (
                        <div className="error-prompt">
                            {this.state.currentError}
                        </div>
                    )
                }
                <h3 className="confirmation-h3">Potwierdź przybycie</h3>
                <form className="confirmation-form" autoComplete="off">

                    <label htmlFor="name">Imię</label>
                    <input onChange={this.changeHandler} type="text" id="name" className="name" value={name} />

                    <label htmlFor="surname">Nazwisko</label>
                    <input onChange={this.changeHandler} type="text" id="surname" className="name" value={surname} />

                    <p>Czy przybędziesz na wesele?</p>
                    <div>
                        <label className="radio-label">
                            <input onChange={this.changeHandler} type="radio" name="confirmed" value={true} checked={this.state.confirmed} />
                            Tak
                        </label>
                        <label>
                            <input onChange={this.changeHandler} type="radio" name="confirmed" value={false} checked={!this.state.confirmed} />
                            Nie
                        </label>
                    </div>

                    <label htmlFor="companion">Osoba towarzysząca</label>
                    <input onChange={this.changeHandler} type="text" id="companion" className="name" value={companion} />

                    <p>Czy osoba towarzysząca przybędzie na wesele?</p>
                    <div>
                        <label className="radio-label">
                            <input onChange={this.changeHandler} type="radio" name="companionConfirmed" value={true} checked={companionConfirmed} />
                            Tak
                        </label>
                        <label>
                            <input onChange={this.changeHandler} type="radio" name="companionConfirmed" value={false} checked={!companionConfirmed} />
                            Nie
                        </label>
                    </div>
                    <label htmlFor="message">Twoja wiadomość</label>
                    <textarea onChange={this.changeHandler} id="message" placeholder="Twoja wiadomość" value={message}></textarea>

                    <label htmlFor="token">Token</label>
                    <input onChange={this.changeHandler} type="text" id="token" value={token} />

                    <button>Wyślij</button>
                    <button>Reset</button>
                </form>
            </div>
        );
    }
}

export default Confirmation;
