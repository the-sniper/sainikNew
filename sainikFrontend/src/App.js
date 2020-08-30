import React from "react";
import "./App.css";
import Login from "./views/Login/Login";
import UserDetailsForm from "./views/UserDetailsForm/UserDetailsForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./views/Registration/Registration";
import UserMessage from "./components/UserMessage/UserMessage";
import ZsbAdmin from "./views/Admin/ZsbAdmin";
import Search from "./views/Search/Search";
import Header from "./components/Header/Header";
import { Routes } from "./RouteConstants";
import CustomModal from "./components/CustomModal/CustomModal";
import Multiselect from "./components/Multiselect/Multiselect";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path={Routes.login.url} component={Login} />
          <Route exact path={Routes.userForm.url} component={UserDetailsForm} />
          <Route exact path={Routes.reg.url} component={Registration} />
          <Route
            exact
            path={Routes.userNotification.url}
            component={UserMessage}
          />
          <Route exact path={Routes.zsbDashboard.url} component={ZsbAdmin} />
          <Route exact path={Routes.search.url} component={Search} />
          <Route exact path={Routes.customModal.url} component={CustomModal} />
          <Route exact path="/multi" component={Multiselect}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
