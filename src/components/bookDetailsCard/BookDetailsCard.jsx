import React from "react";
import Card from 'react-bootstrap/Card';

export default function BookDetailsCard({img, title, price, asin}) {
  return (
    <Card style={{width:'20rem'}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Ecco tutti i dettagli di questo libro.
        </Card.Text>
        <Card.Text>
          ASIN:{asin}
        </Card.Text>
        <Card.Text>Prezzo: ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
