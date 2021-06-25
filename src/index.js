import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import './styles/loader.css';
import App from "./app.js";
// stateless function component !!
// JSX return and componet should always return it otherwise it will create the error to user 11;
// Component should always return single element !!
// JSX Rules !!
// div/section/article// <></> -- fragment <React.fragement></React.fragment>
// element should be close always
// html attributes should be camelCase!!
// className == it should class
// formatting () -- no need to be worry it will handle but not using then it should be formated
//
//
/* Main component load from this place and render into the root of the system
 * */
ReactDom.render(<App />, document.getElementById("root"));
