import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/landing";
import Home from "./Components/Home/home";
import RecipeCreate from "./Components/RecipeCreate/recipeCreate";
import Detail from "./Components/Details/details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/recipes" component={RecipeCreate} />
          <Route exactpath="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
