import React, {useState} from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import './bookcard.css'

export default function BookCard({ img, title, price, key }) {

  const [isSelected, setIsSelected] = useState(false)

  const selectedCard = () => {
    setIsSelected(!isSelected)
    console.log(isSelected)
  }

  return (
    <>
      <Col xs={3} key={nanoid()}>
        <Card border={ `${isSelected? 'danger' : ''}`}>
          <Card.Img onClick={selectedCard} src={img} variant="top" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              ${price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
