import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import ShopService from '../../../services/ShopService';

import './mailing.scss';

export default class Mailing extends Component {
  state = {
    email: '',
    sendButtonText: 'Підписатись',
    isError: '',
  }

  ShopService = new ShopService();

  handleChange = (e) => {
    e.persist();
    const email = e.target.value;
    this.setState({
      email,
    });
  }

  handleClick = () => {
    const { email } = this.state;
    if (email.length > 0 && email.includes('@') && email.includes('.')) {
      let message = `<b>Email: </b>${email} \n#розсилка`;
      message = encodeURIComponent(message);
      this.ShopService.sendMessage(message)
        .then(this.onMessageSend)
        .catch(this.onError);
    } else {
      const sendButtonText = <span>Підписатись <FontAwesomeIcon icon={faTimes}/></span>;
      this.setState({
        sendButtonText,
        isError: 'Введіть коректний email',
      })
    }
  }

  onMessageSend = () => {
    const sendButtonText = <span>Підписатись <FontAwesomeIcon icon={faCheck}/></span>;
    this.setState({
      sendButtonText,
      isError: '',
    });
  }

  onError = () => {
    const sendButtonText = <span>Підписатись <FontAwesomeIcon icon={faTimes}/></span>;
    this.setState({
      sendButtonText,
      isError: 'Помилка. Спробуйте ще раз!',
    });
  }

  render() {
    const { sendButtonText, isError } = this.state;

    return (
      <main>
        <div className="mailing">
          <div className="container">
            <div className="mailing-wrapper">
              <div className="mailing-title">
                <h3>Розсилка</h3>
              </div>
              <div className="mailing-text">
                Знижки до -20% в кожному листі, прем'єри в магазині і новини.
              </div>
              <div className="mailing-input">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={this.handleChange}/>
              </div>
              <div className="mailing-button">
                <button className="btn" onClick={this.handleClick}>{sendButtonText}</button>
                <div className="error">{isError}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
