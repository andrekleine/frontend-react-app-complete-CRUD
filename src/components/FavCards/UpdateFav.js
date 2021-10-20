import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useState } from "react";

const UpdateFav = (props) => {
  const history = useHistory();
  const [comment, setComment] = useState({
      yourComment:''
  })

  const handleClick = () => {
    props.onClick();
    axios
      .put(`https://ironrest.herokuapp.com/meusFavoritos/${props.id}`, comment)
      .then(() => {
        history.go(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Modal.Dialog>
        <Form>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Adicione seu comentário"
              onChange={(e) => setComment({...comment , yourComment: e.target.value})}
            />

        </Form>
        <Modal.Footer>
          <Button onClick={props.onClick} variant="light">
            Não quero
          </Button>
          <Button onClick={handleClick} variant="danger">
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default UpdateFav;
