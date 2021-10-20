import React from "react";
import Card from "./Card";

const CardRack = () => {
  return (
    <svg width="320" height="350">
      <Card
        link={`/favoritos/${window.name}/Alimentação`}
        cardY="0"
        cardColor="#E2E200"
        textY="36"
        textColor="#919100"
        cardName="Alimentação"
      />
      <Card
        link={`/favoritos/${window.name}/Entretenimento`}
        cardY="50"
        cardColor="#FF5959"
        textY="86"
        textColor="#CC0000"
        cardName="Entretenimento"
      />
      <Card
        link={`/favoritos/${window.name}/Recreação`}
        cardY="100"
        cardColor="#54CE52"
        textY="136"
        textColor="#238C21"
        cardName="Recreação"
      />
      <Card
        link={`/favoritos/${window.name}/Serviços`}
        cardY="150"
        cardColor="#8C7CFF"
        textY="186"
        textColor="#1D00FF"
        cardName="Serviços"
      />
      <Card
        link={`/favoritos/${window.name}/Diversos`}
        cardY="200"
        cardColor="black"
        textY="236"
        textColor="white"
        cardName="Diversos"
      />
    </svg>
  );
};

export default CardRack;
