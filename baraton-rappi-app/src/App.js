import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';



class App extends Component {


  render() {
    return (

      <React.Fragment>
        <Navbar></Navbar>
        <section className="main">
          <Switch>

            <Route exact path="/" component={ProductList}></Route>
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </section>
      </React.Fragment>
    );

  }

}

export default App;
