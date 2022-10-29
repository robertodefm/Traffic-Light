//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { Stick } from "./component/stick.jsx";

//import your own components
import Trafficlight from "./component/trafficlight.jsx";


//render your react application
ReactDOM.render(<Stick />, document.querySelector("#plus"));
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));
