import { useState } from "react";
import "./App.css";

function Node({ value, next }) {
  return (
    <section>
      <p>Value: {value}</p>
      {next && <Node {...next} />}
    </section>
  );
}

function LinkedList() {
  const [head, setHead] = useState(null);

  function addNode(value) {
    const node = { value, next: head };
    setHead(node);
  }

  function clearList() {
    setHead(null);
  }

  return (
    <main>
      <h1>Basic Linked List</h1>
      <section className="btnFunctions">
        <button onClick={() => addNode(Math.floor(Math.random() * 100))}>
          Add Node
        </button>
        <button onClick={() => clearList()}>Clear List</button>
      </section>
      {head && <Node {...head} />}
    </main>
  );
}

export default LinkedList;
