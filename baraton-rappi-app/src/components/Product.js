import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

export default class Product extends Component {

    render() {
        const { quantity, price, available, sublevel_id, name, id, inCart } = this.props.Products;


        const NotAvailable = () => {

            if (available === false) {
                return <p className=" text-danger"> - Not Available</p>
            }
            return <p className="text-success"> - Available</p>
        };

        
        

        return (


            <ProductWrapper >

                <div className="platillo">
                    <p className="nombre">{name}</p>
                    {NotAvailable()}

                    <p className="precio"> $ {price} </p>
                    <ProductConsumer>
                        {(value) => (

                            <button className="cart-btn" disabled={inCart === available ? true :
                                false} onClick={() => {
                                    value.addToCart(id);
                                }} >

                                {inCart === available ? (<p className="text-capitalize mb-0" title="The product is currently disabled or is already in the shopping cart" disabled> N/A</p>) : (<li className="fa fa-cart-plus">Add</li>)}
                            </button>
                        )}
                    </ProductConsumer>

                </div>

            </ProductWrapper>

        );
    }
}

Product.propTypes = {
    Products: PropTypes.shape({
        quantity: PropTypes.number,
        price: PropTypes.string,
        available: PropTypes.bool,
        sublevel_id: PropTypes.number,
        name: PropTypes.string,
        inCart: PropTypes.bool,
        id: PropTypes.string,
    }).isRequired
}

const ProductWrapper = styled.div`

`

