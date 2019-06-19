import React, { Component } from 'react';
import { categories } from './components/products/categories';
import { products } from './components/products/products';

const ProductContext = React.createContext();
//Provider
//Consumer

export default class ProductProvider extends Component {
    state = {
        categories: categories,
        product: [],
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }


    componentDidMount() {
        this.setProducts();
    }
    setProducts = (id) => {
        let tempProducts = [];
        products.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { product: tempProducts };
        })
    }

    getItem = (id) => {
        const products = this.state.product.find(item => item.id === id);
        return products;
    }

 
    addToCart = id => {
        let tempProducts = [...this.state.product];
        const index = tempProducts.indexOf(this.getItem(id));
        const products = tempProducts[index];
        products.inCart = true;
        products.count = 1;
        const price = products.price;
        var total = Number(price.replace(/[^0-9.-]+/g, ""));
        products.total = total;
        products.price =  total;
        
        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, products] };

            }, () => {
                this.addTotals();
            })
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
                this.addTotals()
            }
        );
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0) {
            this.removeItem(id);
        }else{
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                    this.addTotals()
                }
            );
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.product];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                product: [...tempProducts]
            };
        },
            () => {
                this.addTotals();
            }
        )

    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        })

    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = parseFloat(subTotal * 0.19);
        const total = parseFloat(subTotal + tempTax);
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                carTax: tempTax.toFixed(2),
                cartTotal: total.toFixed(2)
            }
        })
    }

    render() {
        return (

            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }
            }>
                {this.props.children}


            </ProductContext.Provider>

        );


    }



}



const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
