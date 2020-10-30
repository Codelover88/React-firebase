import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";

import { NotificationContainer } from "react-notifications";
import Register from "./component/Register";
import SavedList from "./component/SavedList";
import App  from './App'

function Index() {
  return (
    <>
      <NotificationContainer />
      <div className="container my-2">
        <App></App>
        <SavedList />
        <Register />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);