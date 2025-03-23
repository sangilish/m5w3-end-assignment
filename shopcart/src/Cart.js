import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function Cart(props) {
  return (
    <div className="m-5 px-5 w-75">
      <h2> Your Cart Items</h2>
      {props.prods.map(prod => {
        if (prod.quantity > 0) {
        return (
          <div key={prod.id} className="border">
            <img
              src={prod.image}
              width="150"
              alt={prod.name}
            />
            <p className="qty d-inline mx-5">Quantity: {prod.quantity}</p>
            <p className="px-4">{prod.name}</p>
          </div>
        )
      }
    })}
      <CheckOutBtn totalValue={props.totalValue} />
    </div>
  )
}

const CheckOutBtn = ({ totalValue }) => {
  return totalValue > 0 ? (

    <Link to="/signin">
      <Button className="mt-4 bg-primary">Check Out</Button>
    </Link>
  ) : (
    <React.Fragment>
      <h4>There are {totalValue} items in your cart.</h4>
      <Link to="/">
        <Button className="mt-4 bg-success">Continue Shop</Button>
      </Link>
    </React.Fragment>
  );
}
  
  






