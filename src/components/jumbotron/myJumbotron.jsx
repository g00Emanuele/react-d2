import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../jumbotron/myJumbotron.css'


export default class MyJumbotron extends Component {
  render() {
    return (
      <>
        <Container>
            <Row>
              <Col>
                <div className='jumbotron'>
                <h1>Epibooks</h1>
                </div>
              </Col>
            </Row>
        </Container>
      </>
    )
  }
}
