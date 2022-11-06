import "./styles.css";
import React from "react";
import Home from "./containers/Home";

let detail = "";
const swap = (comp) => {
  console.log(comp);
  detail = comp;
};

export default function App() {
  return <Home handler={swap} comp={detail} />;
}
