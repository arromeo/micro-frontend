import React from "react";
import ReactDOM from "react-dom/client";
import ShoppingCartApp from "./ShoppingCartApp";

class ShoppingCart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);
    const root = ReactDOM.createRoot(mountPoint);

    // This will render:
    // root.render(<button>Click me!</button>);

    console.log({ ShoppingCartApp });

    // This will not render:
    root.render(<ShoppingCartApp />);
  }
}

window.customElements.define("shopping-cart", ShoppingCart);
