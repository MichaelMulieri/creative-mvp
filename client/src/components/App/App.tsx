import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WordLadderPage from "../pages/WordLadderPage";
import ContactPage from "../pages/ContactPage";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/wordladder">Word Ladder</Link>
            </li>
            <li>
              <Link to="/contactpage">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wordladder" element={<WordLadderPage />} />
          <Route
            path="/contactpage"
            element={<ContactPage cta="Subscribe Now" />}
          />
        </Routes>
      </main>
      <footer>footer placeholder</footer>
    </div>
  );
}

export default App;
