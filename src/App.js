import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import HomePage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-game" element={<CreateGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
