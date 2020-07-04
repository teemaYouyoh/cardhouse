import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Purchase.scss';

class Purchase extends Component {
  state = {
    data: {
      name: '',
      surname: '',
      phone: '',
      email: '',
    },
    warning: '',
  }

  handleChange= async (e) => {
    e.persist();
    const { value, name } = e.target;
    await this.setState((prevState) => {
      return {
        data: {
          ...prevState.data,
          [name]: value,
        },
      };
    });
  }

  handleClick = async () => {
    const { name, surname, phone, email } = this.state.data;

    if (name === '' || surname === '' || phone === '' || email === '') {
      this.setState({
        warning: 'Заповніть порожні поля!',
      });
    } else {
      let message = '';
      const { data } = this.state;
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      let products = '';

      cart.forEach((item) => {
        products += `\n${item.name}: ${item.amount}`;
      });

      Object.keys(data).forEach((item) => {
        message += `<b>${item}: </b>${data[item]} \n`;
      });
      message += `<b>products: </b>${products} \n#замовлення`;
      message = encodeURIComponent(message);

      const response = await fetch(`https://api.telegram.org/bot1073305059:AAGW0XZrt9XIC5WAGzL6lr9gb_0W-kg5hpM/sendMessage?chat_id=-459071785&parse_mode=html&text=${message}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      this.setState({
        warning: '',
      });

      localStorage.setItem('cart', JSON.stringify([]));
      this.props.history.push('/shop');
    }
  }

  render() {
    const { warning } = this.state;

    return (
      <main>
        <div className="purchase">
          <div className="container">
            <div className="purchase-wrapper">
              <h2 className="purchase-title">Оформлення замовлення</h2>
              <div className="warining">
                {warning}
              </div>
              <input type="text" name="name" onChange={this.handleChange} placeholder="Им'я"/>
              <input type="text" name="surname" onChange={this.handleChange} placeholder="Прізвище"/>
              <input type="text" name="phone" onChange={this.handleChange} placeholder="Телефон"/>
              <input type="text" name="email" onChange={this.handleChange} placeholder="Email"/>
              <button className="purchase btn" onClick={this.handleClick}>Оформити</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Purchase.propTypes = {
  history: PropTypes.object,
};

Purchase.defaultTypes = {
  history: {},
};

export default Purchase;
