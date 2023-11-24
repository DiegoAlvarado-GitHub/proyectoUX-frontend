import React from "react";
import ReactDOM from "react-dom";
import MicrofrontendComponent from "./MicrofrontendComponent";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.scss";
import HomeComponent from "./components/HomeComponent";
import PremeetingComponent from "./components/PremeetingComponent";


const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/premeeting" Component={PremeetingComponent} />
        <Route path="/" Component={HomeComponent} />
      </Routes>
    </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
