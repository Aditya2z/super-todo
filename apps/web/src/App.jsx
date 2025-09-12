import "./App.css";
import fetchData from "../utils/fetch";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE;

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  async function loadData() {
    try {
      const data = await fetchData("todos");
      setTasks(data);
    } catch (err) {
      setTasks("❌ API not reachable", err);
    }
  }

  async function createTask(title) {
    const res = await fetch(`${API}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    return res.json();
  }

  async function editTask(id, newTitle) {
    setIsEditing(true);

    const res = await fetch(`${API}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, title: newTitle }),
    });

    return res.json();
  }

  async function deleteTask(id) {
    const res = await fetch(`${API}/todos/${id}`, {
      method: "DELETE",
    });

    return res.json();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <h1>🚀 Super-Todo</h1>
      <div className="todo-input">
        <input
          type="text"
          name="todoInput"
          placeholder="Please enter a task to do"
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button onClick={() => createTask(currentTask)}>Create Todo</button>
      </div>
      <div className="todo-list">
        {tasks?.forEach(({ id, title }) => {
          title && (
            <div className="todo">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="todoEditInput"
                    value={title}
                    onChange={(e) => {
                      setCurrentTask(e.target.value);
                    }}
                  />
                  <button onClick={setIsEditing(false)}>Cancel</button>
                  <button onClick={editTask(id, currentTask)}>Confirm</button>
                </>
              ) : (
                <span>{title}</span>
              )}
              {!isEditing && (
                <>
                  <button onClick={() => editTask(id)}>EDIT</button>
                  <button onClick={() => deleteTask(id)}>DELETE</button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
