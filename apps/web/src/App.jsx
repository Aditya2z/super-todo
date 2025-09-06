import "./App.css";
import fetchData from "../utils/fetch";
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("⏳ Checking API...");

  async function loadData() {
    try {
      const data = await fetchData("health");
      setStatus(data.message);
    } catch (err) {
      setStatus("❌ API not reachable", err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <h1>🚀 Super-Todo</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;
