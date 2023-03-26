import React, { useState } from "react";

function ShoppingCartApp() {
  const [presses, setPresses] = useState(0);

  function handleClick() {
    setPresses((prev) => prev + 1);
  }

  return (
    <div>
      <span>There have been {presses} clicks!</span>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default ShoppingCartApp;
