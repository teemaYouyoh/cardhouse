import React, { Component } from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';

import './products-filters.scss';

const ProductsFilters = (props) => {
  const { minPriceSlider, maxPriceSlider, manufacturer, manufacturerInfo } = props;

  return (
    <section className="products-filters">
      <h4>Пошук</h4>
      <hr/>
      <input
        className="search"
        onChange={props.search}
        type="text"
        placeholder="Введіть назву товару"
      />

      <h4>Виробники</h4>
      <hr/>
      <ul>
        <li
          onClick={props.selectManufacturer}
          data-name="allManufacturers"
          data-information="United States Playing Card Company - лидер производства игральных карт уже 135 лет."
        >
                Всі виробники
        </li>
        { props.renderManufacturers('list') }
      </ul>
      {/* 
            <h4>Виробники</h4>
            <hr/>
            <select onChange={this.selectManufacturer}>
              <option
                // onClick={this.selectManufacturer}
                data-name="allManufacturers"
                data-information="United States Playing Card Company - лидер производства игральных карт уже 135 лет."
              >
                Всі виробники
              </option>
              { props.renderManufacturers('select') }
            </select> */}

      <h4>Сортування</h4>
      <hr/>
      <select onChange={props.sortItems}>
        <option value="upPrice" >Від дешевих до дорогих</option>
        <option value="downPrice" >Від дорогих до дешевих</option>
      </select>

      <h4>Діапазон цін</h4>
      <hr/>
      <RangeSlider
        setMaxPrice={ props.setMaxPrice }
        minPrice = { +minPriceSlider }
        maxPrice = { +maxPriceSlider }
      />
    </section>
  );
}

export default ProductsFilters;