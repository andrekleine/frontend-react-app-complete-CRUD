import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const DelFav = (props) => {
  const history = useHistory();  

  const handleClick = () => {
    props.onClick();
    axios
      .delete(`https://ironrest.herokuapp.com/meusFavoritos/${props.id}`)
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
        <Modal.Header>
          <Modal.Title>Você quer mesmo deletar este favorito?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={props.onClick} variant="light">
            Não quero
          </Button>
          <Button onClick={handleClick} variant="danger">
            Sim, Deletar!
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DelFav;
