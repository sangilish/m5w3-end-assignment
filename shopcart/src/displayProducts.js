import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ListGroup, ListGroupItem } from "reactstrap";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setShowImge(item);
  };

  const { price } = props;
  return (
    <div>
      <div>
        <span>
          Sort by Price: 
          <button
            className="btn btn-muted dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onChange={() => props.onSort(price, "asc")}
          >
            Select
          </button>
        </span>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Normal
          </a>
          <a className="dropdown-item" href="#">
            Lowest
          </a>
          <a className="dropdown-item" href="#">
            Highest
          </a>
        </div>
      </div>
      {props.products.map((product) => {
        return (
          
          <div key={product.id} className="border border-1 p-3">
            <h4 className="mx-5">
              {product.name}
              <span className="text-danger"> ${product.price}</span>
            </h4>

            <img
              src={product.image}
              width="150"
              alt={product.name}
              className="mx-5"
              onClick={() => handleShow(product)}
            />
            <button
              className="btn btn-secondary mx-2"
              onClick={() => props.onIncrement(product)}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => props.onDecrement(product)}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
            </button>
            <div className="d-inline-block mx-4 text-center">
              <span className="d-block mb-2">Quantity</span>
              <span
                id="qty"
                className="px-3 py-2 border border-3 d-inline-block"
              >
                {product.quantity}
              </span>
            </div>
          </div>
        );
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.name}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImge.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
