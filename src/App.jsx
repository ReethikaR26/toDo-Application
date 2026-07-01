import { useEffect, useState } from 'react'
import './App.css'
import {
  Routes,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage.jsx';
import TodoPage from './pages/TodoPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import UserContext from './context/UserContext';
function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : {
      name : "", role : "User"
    }
  });

  const updateUser = (name) => {
    const newUser = {name, role: "User"};
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  return (
    <>
    <UserContext.Provider value={{user,updateUser}} >
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/todos' element={<TodoPage/>} />
      <Route path='/about' element={<AboutPage/>} />
    </Routes>
    </UserContext.Provider>
    </>
  )
  
}

export default App
