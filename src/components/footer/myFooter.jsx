import React from "react";
import { Container, Row } from "react-bootstrap";
import { footerLinks } from "../../data/myFooterLinks";
import { nanoid } from "nanoid";
import "./myFooter.css";

const MyFooter = () => {
  return (
    <>
      <Container>
        <Row>
          <ul>
            {footerLinks.map((link) => {
              return (
                <li key={nanoid()}>
                  <a href={`${link.href}`}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
