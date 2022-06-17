import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/LoginPage";
import Organization from "./pages/Organization";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
