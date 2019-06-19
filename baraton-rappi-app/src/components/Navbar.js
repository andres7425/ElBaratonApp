import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav className="menu">
                        <Link to="/">
                        <h3>Menu</h3>
                        </Link>

                        <Link to="/cart">
                            <ButtonContainer>
                                <span className="mr-2">
                                    <i className="fa fa-cart-plus"></i>
                                     My Cart
                                </span>
                            </ButtonContainer>
                        </Link>

                    </nav>

                    <div className="texts">
                        <h1 className="nombre">Store <span>El Baraton</span></h1>
                        <h3> <i> The perfect place to buy</i></h3>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
