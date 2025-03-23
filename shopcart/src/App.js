import "./App.css";
import React, { Component } from "react";
// import { useCart } from "react-use-cart";
import { products } from "./products.js";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cart from './Cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "asc",
      itemPrice: "",
      items: products,
    };
  }

  handleIncrement = (addquantity) => {
    // let addedProduct = products.map(product => {
    //   if (product.id === addquantity)
    // })
    if (addquantity.quantity < 10) {
      const updatedQuantity = addquantity.quantity++;
      this.setState({ updatedQuantity });
    }
  };

  handleDecrement = (subquantity) => {
    if (subquantity.quantity > 0) {
      const updatedQuantity = subquantity.quantity--;
      this.setState({ updatedQuantity });
    }
  };

  onSort = (itemPrice, sortType) => {
    itemPrice.sort((a, b) =>{
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.text.localeCompare(b.text);
    })
  }

  render() {
    return (
      <div className="App">
        
        <Navbar
          totalValue={this.state.items
            .map((prod) => prod.quantity)
            .reduce((acc, curr, index) => acc + curr, 0)}
          prods={this.state.items}
          props={this.state.products}
          sortType={this.state.sortType}
          itemPrice={this.state.itemPrice}
          onSort={this.onSort}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        
      </div>
    );
  }
}

export default App;
