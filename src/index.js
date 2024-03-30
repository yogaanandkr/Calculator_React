import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Cal from "./Cal";
// let h1 = React.createElement("h1", {}, "i'm from div h1");
// let h2 = React.createElement("h2", {}, "i'm from div h2");
// let div = React.createElement(
//   "div",
//   { style: { color: "cyan" }, className: "division" },
//   [h1, h2]
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

let div = (
  <div className="division">
    <h1>i'm from div h1</h1>
    <h2>i'm from div h2</h2>
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <Class></Class>
//     <Fun></Fun>
//   </StrictMode>
// );

// root.render(
//   cards.map(a => {
//     return <Fun obj={a}></Fun>;
//   })
// );

// obj = {
//   login: "mojombo",
//   id: 1,
//   node_id: "MDQ6VXNlcjE="
// };
// root.render(<Hooks></Hooks>);
root.render(<Cal></Cal>);
