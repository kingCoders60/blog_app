import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'
import NavbarDemo from './components/Navbar2'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Posts from './pages/posts'

function App() {

  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <NavbarDemo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  )
}

export default App
