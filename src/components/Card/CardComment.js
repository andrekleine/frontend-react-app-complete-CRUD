import React from "react";
import { Card } from "react-bootstrap";

const CardComment = ({ text1, text2 }) => {
  return (
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p> {text1} </p>
        <footer className="blockquote-footer">
          <cite title="Source Title"> {text2}</cite>
        </footer>
      </blockquote>
    </Card.Body>
  );
};

export default CardComment;
