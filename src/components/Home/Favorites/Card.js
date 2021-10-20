import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <g>
        <rect
          y={props.cardY}
          rx="20"
          ry="20"
          width="320"
          height="100"
          fill={props.cardColor}
        />
        <text x="18" y={props.textY} fill={props.textColor} className="card">
          {props.cardName}
        </text>
      </g>
    </Link>
  );
};

export default Card;
