
// appending more childs to single div element like we do in html
// we can create an array for creating more childs

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "RADHA"),
    React.createElement("h2", {}, "RADHA"),
  ]),
  React.createElement("h2", {}, "RADHA"),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "RADHA"),
    React.createElement("h2", {}, "RADHA"),
  ]),
  React.createElement("h2", {}, "RADHA"),
]);

const heading = React.createElement("h1", { id: "heading" }, "Jay Guruji");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
