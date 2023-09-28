import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>ERROR 404:NotFound</h1>
      <Link to={"/"}>
        <Button>Torna alla Home</Button>
      </Link>
    </>
  );
}
