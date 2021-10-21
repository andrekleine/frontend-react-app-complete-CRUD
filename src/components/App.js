import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultPage from "./ResultPage/ResultPage";
import Details from "./Details/Details";
import Comments from "./Details/Comments/Comments";
import Login from "./Login/Login";
import FavCards from "./FavCards/FavCards";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/details/:id/comments" component={Comments} />
          <Route path="/result-page" component={ResultPage} />
          <Route path="/favorites/:user/:category" component={FavCards} />
          <Route path="/details/:id" component={Details} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
