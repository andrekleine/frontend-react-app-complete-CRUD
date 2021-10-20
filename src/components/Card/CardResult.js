import React from "react";
import { Card } from "react-bootstrap";

const CardResult = ({ text1, text2, title }) => {
  return (
    <div className="card border-success mb-2 mx-1">
      <Card.Body className="h-100 d-inline-block w-auto p-0">
        <div className="bg-success p-1 text-dark bg-opacity-10 ">
          <Card.Title> {title ? <h6>{title}</h6> : null} </Card.Title>
          <blockquote className="blockquote mb-0">
          <p> {text1} - {text2} </p> 
          </blockquote>
        </div>
      </Card.Body>
    </div>
  );
};

export default CardResult;