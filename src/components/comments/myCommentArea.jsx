import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import CommentList from "./myCommentList";
import SingleComment from "./mySingleComment";
import { PostProvider } from "../../contexts/BookContext";
import AddComment from "./myAddComment";

export default function CommentArea() {
  const { isLoading, error, comments, isSelected } = useContext(PostProvider);

  return (
    <Col sm={4}>
      <h2>Recensioni</h2>
      {isSelected && <AddComment />}
      {error && <h2>C'è stato un errore nel caricare i commenti</h2>}
      {!error && isLoading && <h1>Sta caricando...</h1>}
      {!isLoading && !error && (
        <CommentList
          commenti={comments.map((comment) => {
            return (
              <SingleComment commento={comment.comment} rate={comment.rate} author={comment.author}/>
            );
          })}
        />
      )}
    </Col>
  );
}
