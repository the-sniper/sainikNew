import React from "react";
import "./App.css";
import Login from "./views/Login/Login";
import UserDetailsForm from "./views/UserDetailsForm/UserDetailsForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PensionDetails from "./views/UserDetailsForm/PensionDetails"
import Test from "./components/Test/Test";
import Registration from "./views/Registration/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/Form" component={UserDetailsForm} />
          <Route exact path="/PensionDetails" component={PensionDetails} />
          <Route exact path="/Reg" component={Registration} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
