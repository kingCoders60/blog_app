import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Posts from './pages/posts'
import CreatePost from "./pages/CreatePost.jsx"

function App() {

  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App
