import { useState, useEffect, React } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import image from "./categoryImagePlaceHolder.png";
import Rating from "./Rating/Rating";
import "./Details.css";
import Price from "./Price/Price";
import Comments from "./Comments/Comments";
import AddFav from "../AddFav/AddFav";

const Details = (props) => {
  const [comments, setComments] = useState([
    {
      id: "123456789-commentID",
      text: "nenhuma dica aqui ainda",
      user: { firstName: "seja o primeiro" },
    },
  ]);
  const [results, setResults] = useState({
    id: "",
    categoryImage: { image },
    name: "",
    rating: 10,
    phone: "+55 11 998888888",
    imageSrc:
      "https://image.shutterstock.com/image-vector/photo-coming-soon-image-eps10-600w-86220151.jpg",
    urlVenue: "",
    user: "",
    priceTier: "",
    comments: [],
    address: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    const endPoint = `https://api.foursquare.com/v2/venues/${props.match.params.id}?`;
    const parameters = {
      client_id: "DQCEDNDNFU2MTEZYJA54SQWTMAGVF55RVTJWPZB4G1EM5BEE",
      client_secret: "XRZZLSD0DFBCCBP2TRLG1UZTOUAWTUY5ANRMAATAV2ABOV0I",
      v: "20210930",
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then((response) => {
        const targetObj = response.data.response.venue;
        const location = targetObj.location;

        setResults({
          id: props.match.params.id,
          address: location ? location.address : "",
          city: location ? location.city : "",
          country: location ? location.country : "",
          name: targetObj.name,
          rating: targetObj.rating ? targetObj.rating : 11,

          imageSrc: targetObj.bestPhoto
            ? targetObj.bestPhoto.prefix +
              "100x100" +
              targetObj.bestPhoto.suffix
            : "https://image.shutterstock.com/image-vector/photo-coming-soon-image-eps10-600w-86220151.jpg",
          tip:
            targetObj.tips.groups.length > 0
              ? targetObj.tips.groups[0].items[0].text
              : "não existe",

          categoryImage: targetObj.categories[0].icon.prefix
            ? targetObj.categories[0].icon.prefix +
              64 +
              targetObj.categories[0].icon.suffix
            : image,

          phone: targetObj.contact.formattedPhone
            ? targetObj.contact.formattedPhone
            : "",

          personTip:
            targetObj.tips.groups.length > 0
              ? targetObj.tips.groups[0].items[0].user.firstName
              : "nooon",
          urlVenue: targetObj.url,
          priceTier: targetObj.price ? targetObj.price.tier : "",
          comments:
            targetObj.tips.groups.length > 0
              ? targetObj.tips.groups[0].items
              : [
                  {
                    id: "123456789-commentID",
                    text: "nenhuma dica aqui ainda",
                    user: { firstName: "seja o primeiro" },
                  },
                ],
        });
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  useEffect(() => {
    setComments(results.comments);
  }, [results]);

  return (
    <div>
      <Navbar />
      <div className="container-fluid detail-cont">
        <div className="card detail-card">
          <img
            className="card-img-top img-fluid detail-img"
            src={results.imageSrc}
            alt="..."
          />
          <div className="card-body detail-body">
            <h1 className="card-title">{results.name}</h1>
            <Rating>{results.rating}</Rating>
            <Price>{results.priceTier}</Price>
            <p className="card-text detail-address">
              {results.address ? results.address : ""} -{" "}
              {results.address ? results.city : ""} -{" "}
              {results.address ? results.country : ""}
            </p>
            <p className="card-text detail-address">{results.phone}</p>
            <Comments id={results.id} comments={comments} />
            <AddFav venue={results} user={window.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
