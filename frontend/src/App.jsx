import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts"; 
import CreatePost from "./pages/CreatePost";
import ChatWidget from "./components/ChatWidget.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
          <ChatWidget />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
