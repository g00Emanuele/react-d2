import { nanoid } from 'nanoid'
import React from 'react'
import { ListGroup } from 'react-bootstrap'


export default function SingleComment({commento, rate, user}) {
  return (
    <ListGroup.Item key={nanoid}>
      <h6>User</h6>
      <p>{user}</p>
      <h6>Rating</h6>
      <p> {rate}</p>
      <h6>Recensione</h6>
      <p> {commento}</p>
      
      </ListGroup.Item>
  )
}
