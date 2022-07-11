import React, { useState, useEffect } from "react";

export default function Example5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidUpdate by count", count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
