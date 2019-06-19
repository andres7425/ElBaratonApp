import React, { Component } from 'react';
import styled from 'styled-components';
import CartColumns from './CartColumns'
import ExmptyCart from './EmpryCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                    <Titles>Your Cart</Titles>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        }else{
                            return <ExmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

const Titles = styled.div`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
`;