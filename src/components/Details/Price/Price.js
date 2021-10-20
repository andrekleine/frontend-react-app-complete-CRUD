import React from 'react';

const Price = ({ children }) => {
  let price = '$'.repeat(Math.round(children))

  return (
    <div className="price">
    <h6> {price} </h6>
    </div>
  );
};

export default Price;