import { useState } from "react";
import "./App.css";
import TodoModal from "./components/TodoModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <h1>TODO</h1>

        <button className="btn" onClick={() => setShowModal(true)}>
          +
        </button>

        {todos.map((item) => (
          <div
            style={{
              width: "320px",
              textAlign: "start",
              backgroundColor: "#1a1a1a",
              padding: "16px",
              borderRadius: "8px",
              margin: "8px",
            }}
          >
            <h4>title: {item.title}</h4>
            <p>description: {item.description}</p>
          </div>
        ))}

        {showModal && (
          <TodoModal
            todos={todos}
            setTodos={setTodos}
            showModal={setShowModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
