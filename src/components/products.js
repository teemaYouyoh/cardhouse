import React from 'react';
import { connect } from 'react-redux';

const Products = (props) => {
    console.log(props);
    
    return (
        props.products
    )
}


export default connect((state) => {
    return {
        products: state.productsList,
    };
})(Products);

console.log(Products);