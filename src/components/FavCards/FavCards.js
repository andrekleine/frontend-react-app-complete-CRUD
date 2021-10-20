import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Favbar from "./Favbar";
import OneCard from "./OneCard";

const FavCards = (props) => {
  const [collection, setCollection] = useState([]);
  const { user, category } = props.match.params;

  useEffect(() => {
    axios
      .get(
        `https://ironrest.herokuapp.com/findAll/meusFavoritos?user=${user}&category=${category}`
      )
      .then((response) => {
        setCollection([...response.data]);
      })
      .catch((err) => console.error(err));
  }, [category, user]);

  return (
    <div>
      <Navbar />
      <Favbar category={category} />
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        {collection.length ? (
          collection.map((venueObj) => {
            const targetObj = venueObj.venue;
            return (
              <OneCard
                key={venueObj._id}
                image={targetObj.imageSrc}
                name={targetObj.name}
                address={targetObj.address}
                city={targetObj.city}
                country={targetObj.country}
                rating={targetObj.rating}
                id={venueObj._id}
                category={category}
                user={user}
                comment={venueObj.yourComment}
                phone={targetObj.phone}
                priceTier={targetObj.priceTier}
              />
            );
          })
        ) : (
          <div style={{ margin: "3rem" }}>
            <h1 style={{ fontFamily: "Lato", fontSize: "32px" }}>
              Você ainda não adicionou favoritos a esta categoria... que tal
              <Link to="/home"> buscar</Link> algum?
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavCards;
