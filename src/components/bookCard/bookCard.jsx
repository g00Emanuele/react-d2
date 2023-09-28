import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import "./bookcard.css";
import { PostProvider } from "../../contexts/BookContext";
import { Link } from "react-router-dom";

export default function BookCard({ img, title, price, asin }) {
  const { isSelected, setIsSelected } = useContext(PostProvider);

  const selectedCard = (e) => {
    setIsSelected(asin);
  };

  return (
    <>
      <Col xs={4} key={nanoid()}>
        <Card border={`${isSelected === asin ? "danger" : ""}`}>
          <Card.Img onClick={selectedCard} src={img} variant="top" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Link to={`books/${asin}`}>
            <Button variant="primary">Dettagli libro</Button>

            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
