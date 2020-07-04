export default class ShopService {
  constructor() {
    this.apiBase = 'http://localhost:3000';
  }

    sendMessage = async (message) => {
      const response = await fetch(`https://api.telegram.org/bot1073305059:AAGW0XZrt9XIC5WAGzL6lr9gb_0W-kg5hpM/sendMessage?chat_id=-459071785&parse_mode=html&text=${message}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    getData = async (url) => {
      let res = await fetch(`${this.apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}; received ${res.status}`);
      }

      res = await res.json();

      return res;
    }

    getProductsList = () => {
      return this.getData('/products');
    }

    getProduct = (id) => {
      return this.getData(`/products/${id}`);
    }

    getManufacturers = () => {
      return this.getData('/manufacturers');
    }
}
