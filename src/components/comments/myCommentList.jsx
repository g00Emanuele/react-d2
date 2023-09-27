import React from "react";
import { ListGroup } from "react-bootstrap";

export default function CommentList({ commenti }) {
  return <ListGroup>{commenti}</ListGroup>;
}
