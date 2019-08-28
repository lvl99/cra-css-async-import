import React from "react";
import ReactDOM from "react-dom";
import ThemeB from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ThemeB />, div);
  ReactDOM.unmountComponentAtNode(div);
});
