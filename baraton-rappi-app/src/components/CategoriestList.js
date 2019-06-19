import React, { Component } from 'react';
import Title from './Title';
import Categories from './Categories';
import Products from './Product';
import { ProductConsumer } from '../context';

export default class CategoriesList extends Component {

    render() {


        return (
            <React.Fragment>
                <div className="menu">
                    <div className="container">

                        <Title title="Menu"></Title>


                        <ProductConsumer>

                            {(value) => {

                                return value.categories.map(categories => {
                                    return <Categories key={categories.id} Categories={categories} />;
                                });

                            }}


                        </ProductConsumer>
                        <div className="contenedor-menu">
                            <div className="contenedor-menu2">
                                <ProductConsumer>

                                    {(value) => {
                                        return value.product.map(product => {
                                            return <Products key={product.id} Products={product} />;
                                        });

                                    }}


                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


