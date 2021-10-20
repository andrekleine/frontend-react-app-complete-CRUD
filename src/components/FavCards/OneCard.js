import React, { useState } from "react";
import "./OneCard.css";
import Rating from "../Details/Rating/Rating";
import DelFav from "./DelFav";
import UpdateFav from "./UpdateFav";
import Price from "../Details/Price/Price";
import { ReactComponent as PhoneSVG } from "./telephone-fill.svg";
import { ReactComponent as TrashSVG } from "./trash-fill.svg";
import { ReactComponent as PencilSVG } from "./pencil-square.svg";

const OneCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const handleClick = () => {
    showModalUpdate ? setShowModal(false) : setShowModal(!showModal);
  };

  const handleClickUpdate = () => {
    showModal
      ? setShowModalUpdate(false)
      : setShowModalUpdate(!showModalUpdate);
  };

  return (
    <div className="container-fluid">
      <div className="card one-card" style={{marginTop:"11px"}}>
        <div className="title">
          <h5 className="card-title mb-0">{props.name}</h5>
        </div>
        {props.address ? (
          <div className="addresss">
            <p className="card-title mb-0">{`${props.address} - ${props.city} - ${props.country}`}</p>
            <p className="card-title mb-0">
              <PhoneSVG /> {props.phone}
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="info">
          <div className="one-container m-2">
            <img
              className="card-img-top img-fluid one-img"
              src={props.image}
              alt="..."
            />
          </div>
          <div className="card-body information">
            <div className="one-rating-price">
              <Rating>{props.rating}</Rating>
              <Price>{props.priceTier}</Price>
            </div>
            {props.comment ? (
              <div className="one-comment">
                <p>"{props.comment}"</p>
              </div>
            ) : (
              ""
            )}
            <div className="del">
              <span className="del" onClick={handleClick}>
                <TrashSVG />
              </span>
            </div>

            <div className="add-comment">
              <span onClick={handleClickUpdate}>
                <PencilSVG />
              </span>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <DelFav onClick={handleClick} category={props.category} id={props.id} />
      ) : null}
      {showModalUpdate ? (
        <UpdateFav
          onClick={handleClickUpdate}
          category={props.category}
          id={props.id}
        />
      ) : null}
    </div>
  );
};

export default OneCard;
