import { useState } from 'react'
import './App.css'
import Chat from './Chat'
import Login from './Auth/Login'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Logout from './Auth/Logout'
import Signup from './Auth/Signup'
import NavbarLog from './NavbarLog'
import History from './History'

function App() {
  const [isAuthenticated, setAuth] = useState(() => {
  return !!sessionStorage.getItem('token');
});

const [draft, setDraft] = useState("");

  return (
    <>

    <Router>
      {isAuthenticated ? <NavbarLog /> : <Navbar />}
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
        <Route path='/chat' element={isAuthenticated ? <Chat setDraft={setDraft} draft={draft} /> : <About />} />
        <Route path='/history' element={isAuthenticated ? <History /> : <About />} />
        <Route path='/logout' element={<Logout setAuth={setAuth}/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
