import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateAccount } from "./pages/CreateAccount";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewPass } from "./pages/NewPass";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <Route exact path="/NewPass" component={NewPass} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
