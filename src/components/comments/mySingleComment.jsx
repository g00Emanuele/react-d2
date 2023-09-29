import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export default function SingleComment({ commento, rate, author, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteComment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + id,
        {
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTU2MjM4NjEsImV4cCI6MTY5NjgzMzQ2MX0.Ctp7yKd6QUqD4R_OFnAaTQyc2x7i1vVpvkoLcTaCNUU",
          },
          method: "DELETE",
        }
      );
      const data = await response.json();
      setIsLoading(false);
      console.log(id);
    } catch (error) {
      if (error) setError(error);
    }
    window.location.reload()
  };


  
  return (
    <ListGroup.Item key={nanoid}>
      <h6>User</h6>
      <p> {author}</p>
      <h6>Rating</h6>
      <p> {rate}</p>
      <h6>Recensione</h6>
      <p> {commento}</p>
      <Button variant="danger" onClick={deleteComment}>
        <FaTrash />
      </Button>
    </ListGroup.Item>
  );
}
