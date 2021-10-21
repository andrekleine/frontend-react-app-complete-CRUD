import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const DelFav = (props) => {
  const history = useHistory();  

  const handleClick = () => {
    props.onClick();
    axios
      .delete(`https://ironrest.herokuapp.com/my-favorites/${props.id}`)
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
          <Modal.Title>Do you REALLY want to delete this favorite?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={props.onClick} variant="light">
            No, I don't.
          </Button>
          <Button onClick={handleClick} variant="danger">
            Yes, I do. Delete!
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DelFav;
