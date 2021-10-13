import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CreateAccount } from "./pages/CreateAccount";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { isAuth } from "./services/isAuth";

function App() {

  const PrivateRoute = ({ component, ...rest }: any) => (
    <Route {...rest} render={props => (
      isAuth() ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )} />
  )

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <PrivateRoute exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
