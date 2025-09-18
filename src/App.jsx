import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import UserProfile from './pages/userProfile'
import Unknown from './pages/unknown'

function App() {


  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route  path='*' element={<Unknown/>} />
    </Routes>
  )
}

export default App
