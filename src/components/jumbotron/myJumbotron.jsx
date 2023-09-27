import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../jumbotron/myJumbotron.css";
import { ThemeProvider } from "../../contexts/Theme";

const MyJumbotron = () => {
  const { darkMode } = useContext(ThemeProvider);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              className={`${darkMode ? "jumbotron dark-mode" : "jumbotron"}`}
            >
              <h1>Epibooks</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyJumbotron;
