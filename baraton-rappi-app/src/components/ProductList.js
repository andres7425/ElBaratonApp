import React, { Component } from 'react';
import CategoriesList from './CategoriestList';
import Galery from './Galery';
import Ubication from './Ubication';
import Map from './Map';
import Footer from './Footer';

class ProductList extends Component {
    render() {
        return (
            <div>
                <CategoriesList className="contenedor-menu"></CategoriesList>
                <br/>
                <br/>
                <Galery />
                <Ubication />
                <Map/>
                <Footer />
            </div>
        );
    }
}

export default ProductList;