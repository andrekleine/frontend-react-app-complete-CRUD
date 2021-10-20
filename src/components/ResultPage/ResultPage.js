import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ResultPage.css";
import Navbar from "../Navbar";
import ResultCard from "./ResultCard";

const ResultPage = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?";
    const param = {
      client_id: "DQCEDNDNFU2MTEZYJA54SQWTMAGVF55RVTJWPZB4G1EM5BEE",
      client_secret: "XRZZLSD0DFBCCBP2TRLG1UZTOUAWTUY5ANRMAATAV2ABOV0I",
      v: "20210928",
      near: props.location.state.near,
      query: props.location.state.query,
    };

    axios
      .get(endPoint + new URLSearchParams(param))
      .then((response) => {
        setResults(Object.values({ ...response.data.response.venues }));
      })
      .catch((err) => console.error(err));
  }, [props.location.state.near, props.location.state.query]);

  return (
    <div id="all">
      <Navbar />
      <div style={{ height: "50px" }}></div>
      <div className="container-fluid">
        {results.map((place) => {
          return (
            <div key={place.id}>
              <ResultCard
                name={place.name}
                id={place.id}
                category={place.categories[0]? place.categories[0].shortName : ""}
                address={place.location.address}
                city={place.location.city}
                country={place.location.country}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
