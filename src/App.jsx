import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
