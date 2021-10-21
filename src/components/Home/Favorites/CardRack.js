import React from "react";
import Card from "./Card";

const CardRack = () => {
  return (
    <svg width="320" height="350">
      <Card
        link={`/favorites/${window.name}/Food`}
        cardY="0"
        cardColor="#E2E200"
        textY="36"
        textColor="#919100"
        cardName="Food"
      />
      <Card
        link={`/favorites/${window.name}/Entertainment`}
        cardY="50"
        cardColor="#FF5959"
        textY="86"
        textColor="#CC0000"
        cardName="Entertainment"
      />
      <Card
        link={`/favorites/${window.name}/Recreation`}
        cardY="100"
        cardColor="#54CE52"
        textY="136"
        textColor="#238C21"
        cardName="Recreation"
      />
      <Card
        link={`/favorites/${window.name}/Services`}
        cardY="150"
        cardColor="#8C7CFF"
        textY="186"
        textColor="#1D00FF"
        cardName="Services"
      />
      <Card
        link={`/favorites/${window.name}/Misc`}
        cardY="200"
        cardColor="black"
        textY="236"
        textColor="white"
        cardName="Misc"
      />
    </svg>
  );
};

export default CardRack;
