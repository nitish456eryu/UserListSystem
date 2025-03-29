import { useState } from 'react'
import './App.css';
import UsersList from './components/usersList';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='/usersList' element={<UsersList />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
