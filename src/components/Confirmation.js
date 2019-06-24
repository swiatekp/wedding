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
        nameError: null,
        surnameError: null,
        companionError: null,
        messageError: null,
    }
    isValid = target => {
        // if (target.type === "text" || target.tagName === "TEXTAREA") {
        //     if (target.classList.contains('name')) {
        //         if (target.value.length <= 30) {
        //             const regEx = /^[a-zęóąśłżźćń ]*$/i;
        //             if (regEx.test(target.value)) {
        //                 return true;
        //             }
        //             else {
        //                 this.props.setErrorPrompt('W tym polu można używać jedynie liter i spacji');
        //             }
        //             return false;
        //         }
        //         else {
        //             this.props.setErrorPrompt('Długość tekstu w tym polu nie może przekraczać 30 znaków');
        //         }
        //         return false;
        //     }
        //     else if (target.id === "token") {
        //         const regEx = /^[a-zęóąśłżźćń0-9]{0,6}$/i;
        //         if (regEx.test(target.value)) {
        //             return true;
        //         }
        //         else {
        //             this.props.setErrorPrompt('Token składa się wyłącznie z cyfr i liter (6 znaków)');
        //         }
        //         return false;
        //     }
        //     else if (target.id === "message") {
        //         if (target.value.length <= 500) {
        //             const regEx = /^[a-zęóąśłżźćń0-9!#&*()-_=+;:]*$/;
        //             if (regEx.test(target.value)) {
        //                 return true;
        //             }
        //             else {
        //                 this.props.setErrorPrompt('Użyto niedozwolonego znaku');
        //             }
        //             return false;
        //         }
        //         else {
        //             this.props.setErrorPrompt('Długość wiadomości nie może przekroczyć 500 znaków.')
        //             return false;
        //         }
        //     }
        // }
        // else if (target.type === "radio") {
        //     if (target.value === "true" || target.value === "false") {
        //         return true;
        //     }
        //     return false;
        // }
        return true;
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
    formSubmit = e => {
        e.preventDefault();

        let isThereAnError = false;

        if (!/^[a-zęóąśłżźćń]{3,}$/i.test(this.state.name)) {
            this.setState({ nameError: true });
            isThereAnError = true;
        }
        if (!/^[a-zęóąśłżźćń]{2,}$/i.test(this.state.surname)) {
            this.setState({ surnameError: true });
            isThereAnError = true;
        }
        if (!/^[a-zęóąśłżźćń ]{2,}$/i.test(this.state.companion)) {
            this.setState({ companionError: true });
            isThereAnError = true;
        }
        if (!/^[a-zęóąśłżźćń0-9!#&*()-_=+;:]*$/i.test(this.state.message)) {
            this.setState({ messageError: true });
            isThereAnError = true;
        }
        if (!/^[a-zęóąśłżźćń0-9]{6}$/.test(this.state.token)) {
            this.setState({ tokenError: true });
            isThereAnError = true;
        }
        if (!this.state.confirmed === true || this.state.confirmed === false) {
            isThereAnError = true;
        }
        if (!this.state.companionConfirmed === true || this.state.companionConfirmed === false) {
            isThereAnError = true;
        }
        if (!isThereAnError) {
            this.sendToAPI();
        }
        else {
            this.props.setErrorPrompt("Formularz nie został wypełniony prawidłowo.");
        }
    }
    formReset = e => {
        e.preventDefault();
        this.setState({
            name: '',
            surname: '',
            confirmed: false,
            companion: '',
            companionConfirmed: false,
            message: '',
            token: '',
            nameError: null,
            surnameError: null,
            companionError: null,
            messageError: null,
        });
    }
    sendToAPI = () => {
        console.log("Udaję że wysyłam");
    }
    render() {
        const { name, surname, companion, companionConfirmed, message, token } = this.state;
        return (
            <div className="slider-container">
                <h3 className="confirmation-h3">Potwierdź przybycie</h3>
                <form onSubmit={e => e.preventDefault()} className="confirmation-form" autoComplete="off">

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

                    <button onClick={this.formSubmit}>Wyślij</button>
                    <button onClick={this.formReset}>Reset</button>
                </form>
            </div>
        );
    }
}

export default Confirmation;
