import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts"; 
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
