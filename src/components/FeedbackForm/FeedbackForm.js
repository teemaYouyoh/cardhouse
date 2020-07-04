import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import ShopService from '../../services/ShopService';

import './feedback-form.scss';

class FeedbackForm extends Component {
  state = {
    name: '',
    email: '',
    text: '',
    sendButtonText: 'Відправити',
    isError: '',
  }

  ShopService = new ShopService();

  handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { name, email, text } = this.state;

    if (email.length > 0 && name.length > 0 && text.length > 0) {
      if (email.includes('@') && email.includes('.')) {
        let message = `<b>Name: </b>${name} \n<b>Email: </b>${email} \n<b>Text: </b>${text} \n#feedback`;
        message = encodeURIComponent(message);

        this.ShopService.sendMessage(message)
          .then(this.onMessageSend)
          .catch(this.onError);
      } else {
        this.setState({
          isError: 'Введіть коректний email!',
        });
      }
    } else {
      this.setState({
        isError: 'Заповніть пусті поля!',
      });
    }
  }

  onMessageSend = () => {
    const sendButtonText = <span>Відправлено <FontAwesomeIcon icon={faCheck}/></span>;
    this.setState({
      sendButtonText,
      name: '',
      email: '',
      text: '',
      isError: '',
    });
  }

  onError = () => {
    const sendButtonText = <span>Відправити <FontAwesomeIcon icon={faTimes}/></span>;
    this.setState({
      sendButtonText,
      isError: 'Помилка. Спробуйте ще раз!',
    });
  }

  render() {
    const { name, email, text, isError, sendButtonText } = this.state;

    return (
      <section className="feedback-form">
        <div className="container">
          <div className="feedback-form-wrapper">
            <h2>ЗВОРОТНІЙ ЗВ'ЯЗОК</h2>
            {isError}
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              type="text"
              placeholder="Ім'я"
            />
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              type="text"
              placeholder="Email"
            />
            <textarea
              name="text"
              value={text}
              onChange={this.handleChange}
              cols="30"
              rows="10"
              maxLength="500"
              placeholder="Текст повідомлення">
            </textarea>
            <button
              className="btn"
              onClick={this.handleClick}
            >
              {sendButtonText}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default FeedbackForm;
