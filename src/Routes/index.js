import { Route, Switch } from "react-router-native";
import Home from "../Pages/Home";
import Main from "../Pages/Main";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/main">
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
