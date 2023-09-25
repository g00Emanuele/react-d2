import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MyLatestRelease from '../latestRelease/myLatestRelease'
import CommentArea from '../comments/myCommentArea'
import BookContext, { PostProvider } from '../../contexts/BookContext'


export default function Main() {
    
  return (
    <BookContext>
        <Container>
            <Row>
                <MyLatestRelease/>
                <CommentArea/>
            </Row>
        </Container>
    </BookContext>
  )
}
