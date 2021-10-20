import "./Login.css";
import {
  Dropdown,
  DropdownButton,
} from "react-bootstrap/dist/react-bootstrap.min.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [title, setTitle] = useState('Escolha o usuário');

  const users = [
    "Amarílis",
    "André",
    "Cadu",
    "Carlos Arantes",
    "Carol",
    "Davi",
    "Eduardo Brandião",
    "Elaine",
    "Flavia",
    "Giovanna",
    "Guilherme Araújo",
    "Guilherme Nascimento",
    "Henrique Mendes",
    "Henrique Morikawa",
    "Hina",
    "João Pedro",
    "Julia",
    "Pedro Resch",
    "Pedro Barbosa",
    "Piero",
    "Renan",
    "Samuel",
    "Thiago Herculano",
    "Thiago Morais",
  ];

  const handleSelect = (e) => {
    setTitle(e);    
    window.name = e;
  };

  return (
    <div className="login">
      <h1>Meus Favoritos</h1>
      <div className="dropdown"  >
      <div style={{height:'210px', overflow:'auto', width:'190px'}} className="mt-5 user" >
        <DropdownButton 
          title={title}
          id="dropdown-button-drop"
          onSelect={handleSelect}  
          style={{height:'40px', minWidth:'190px' }}     
        >
          {users.map((user) => (
            <Dropdown.Item eventKey={user} key={user} user={user} >
              {user}
            </Dropdown.Item>
          ))}
        </DropdownButton> 
        </div>
        <div>
        <button type="button" className="btn btn-primary mt-5 mx-3" style={{height:'40px', width:"100px"}}  >
          <Link to="/home" style={{ textDecoration: "none", color: "white", width:"auto" }}>
            Entrar
          </Link>
        </button>
        </div>
        </div>       
        
      
      <div className="box"></div>
    </div>
  );
};

export default Login;
