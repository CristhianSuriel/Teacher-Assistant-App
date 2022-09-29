import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import PasswordGen from "./components/PasswordGenerator";
import NotesList from "./components/NotesList";
import ErrorPage from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// REACT ROUTER DOM
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password-generator" element={<PasswordGen />} />
          <Route
            path="/notes"
            element={<NotesList />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
