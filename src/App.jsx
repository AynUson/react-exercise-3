import "./App.css";
import React, { Component } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Items from "./pages/Items";
import Total from "./pages/Total";
import ItemsList from "./pages/ItemsList";

import { PRODUCTS_DATA } from "./data/products";
import { Link as NavLink, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { Link, Route, Routes } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddProduct from "./pages/AddProduct";

export default class App extends Component {
  use;
  state = {
    curPage: "/",
    products: PRODUCTS_DATA,
  };

  getProdsWithQty = () => {
    return this.state.products.filter((prod) => prod.qty > 0).length;
  };

  getProdsOnCart = () => {
    return this.state.products.filter((prod) => prod.qty > 0);
  };

  handleAddProd = (prod) => {
    this.setState({
      products: [
        ...this.state.products,
        { ...prod, id: this.state.products.length + 1 * 5 },
      ],
      // products: this.state.products.push({
      //   ...prod,
      //   id: this.state.products.length + 1,
      // }),
    });
  };

  handleDecrementCart = (id) => {
    this.setState({
      products: this.state.products.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            qty: prod.qty - 1,
          };
        }
        return prod;
      }),
    });
  };

  handleAddCart = (id) => {
    this.setState({
      products: this.state.products.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            qty: prod.qty + 1,
          };
        }
        return prod;
      }),
    });
  };
  render() {
    return (
      <>
        <Navbar
          totalCart={this.getProdsWithQty()}
          // curPage={this.state.curPage}
        />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Items
                  prods={this.state.products}
                  onAddCart={this.handleAddCart}
                  onDecrementCart={this.handleDecrementCart}
                />
              }
            ></Route>
            <Route
              path="/total"
              element={
                <Total
                  prods={this.state.products}
                  prodOnCart={this.getProdsOnCart()}
                />
              }
            ></Route>
            <Route
              path="/allProducts"
              element={<ItemsList prods={this.state.products} />}
            ></Route>
            <Route
              path="/prods/new"
              element={<AddProduct onAddProduct={this.handleAddProd} />}
            />
          </Routes>
        </div>
      </>
    );
  }
}
