import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? <Redirect to="/" /> : <Route exact path="/product/:id" component={SingleItem} />}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
