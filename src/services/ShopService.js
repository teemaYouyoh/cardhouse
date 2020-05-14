export default class ShopService {
  constructor() {
    this.apiBase = 'http://localhost:3000';
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
      return this.getData('/tasks');
    }

    getProduct = (id) => {
      return this.getData(`/tasks/${id}`);
    }

    getManufacturers = () => {
      return this.getData('/manufacturers');
    }
}
