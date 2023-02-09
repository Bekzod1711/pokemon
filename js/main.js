const root = ReactDOM.createRoot(document.getElementById("root"));

function createElement(name = "div", attributes = {}, content) {
  const element = React.createElement(name, attributes, content);
  return element;
}

const main = React.createElement("div", { className: "main" }, [
  createElement("div", { className: "header" }, [
    createElement("img", {
      src: "./images/pokemon_logo 1.png",
      alt: "pokemon image",
      className: "pakemon",
    }),
    createElement("div", { className: "buttons" }, [
      createElement("button", { className: "btn" }, "Gross"),
      createElement("button", { className: "btn" }, "Search"),
      createElement("button", { className: "btn" }, "Aa-Zz"),
      createElement("button", { className: "btn" }, "Button"),
    ]),
  ]),
  createElement("div", { className: "cards" }, [
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
    createElement("div", { className: "card" }, [
      createElement("img", {
        src: "./images/004 1.png",
        alt: "card image",
        className: "card-img",
      }),
      createElement("h3", { className: "card-title" }, "Pokemons"),
      createElement("p", { className: "card-text" }, "Grass Poison"),
      createElement("p", { className: "card-footer" }, "6.9 kg   99 age"),
    ]),
  ]),
]);

root.render(main);
