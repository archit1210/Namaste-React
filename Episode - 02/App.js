import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "This is html h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    )
);

ReactDOM.render(parent, document.getElementById("root"));
