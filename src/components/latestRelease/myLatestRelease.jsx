import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import fantasyBooks from "../../data/books/fantasy.json"
import {nanoid} from 'nanoid'

class MyLatestRelease extends Component {
    render() {
        return (
            
                <Container>
                    <Row>
                       
                            {
                                fantasyBooks.map((book) => {
                                    return <Col xs={3} key={nanoid()}>  
                                    <Card>
                                    <Card.Img src={book.img} variant="top" />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                           ${book.price}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                    </Col>

                                })
                            }
                           
                    </Row>
                </Container>
            
        )
    }
}

export default MyLatestRelease
