import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../jumbotron/myJumbotron.css'

const MyJumbotron = () => {
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


export default MyJumbotron;