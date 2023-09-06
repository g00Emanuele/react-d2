import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


export default class MyJumbotron extends Component {
  render() {
    return (
      <>
        <Container>
            <img className='img-fluid' src="https://picsum.photos/2000/300" alt="window" />
        </Container>
      </>
    )
  }
}
