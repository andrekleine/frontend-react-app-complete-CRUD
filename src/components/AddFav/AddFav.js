import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownButton,
} from "react-bootstrap/dist/react-bootstrap.min.js";
import { useHistory } from "react-router";
import axios from "axios";

const AddFav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [favObj, setFavObj] = useState({
    user: window.name,
    category: "",
    venue: props.venue,
  });
  const [title, setTitle] = useState("Choose category");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (e) => {
    setTitle(e);
    setFavObj({ ...favObj, venue: props.venue, category: e });
  };

  const categories = [
    "Food",
    "Entertainment",
    "Recreation",
    "Services",
    "Misc",
  ];

  const history = useHistory();

  const handleAdd = () => {
    axios
      .post("https://ironrest.herokuapp.com/my-favorites", favObj)
      .then((response) => {
        history.push(`/favorites/${window.name}/${favObj.category}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={showModal}>Add to Favorites !</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body>
          <div className="dropdown">
            <DropdownButton
              title={title}
              id="dropdown-button-drop"
              onSelect={handleSelect}
              style={{ width: "200px" }}
            >
              {categories.map((category) => (
                <Dropdown.Item eventKey={category} key={category}>
                  {category}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-light" onClick={hideModal}>Back</button>
          <button type="button" className="btn btn-success" onClick={handleAdd}>Add!</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFav;
