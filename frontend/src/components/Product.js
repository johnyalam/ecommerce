import React from "react";
import { Card } from "react-bootstrap";
import Ratting from "./Ratting";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/product/" + product._id}>
        <Card.Img src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={"/product/" + product._id}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Ratting
              value={product.rating}
              text={("" + product.numReview).concat(" ", "reviews")}
              color={"#f8e825"}
            ></Ratting>
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
