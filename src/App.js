import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { About } from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ul className="navbar">
          <li className="headerText"> desafio bridge_ </li>
          <li>
            <Link to="/">Calculadora</Link>
          </li>
          <li>
            <Link to="/history">Histórico</Link>
          </li>
          <li>
            <Link to="/about">Sobre o desafio</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
