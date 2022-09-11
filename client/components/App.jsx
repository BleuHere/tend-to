import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Email from './Email'
import Garden from './Garden'
import Home from './Home'

const App = () => {
  return (
    <>
      <h1>Tend</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note-from-a-friend/:id" element={<Email />} />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </>
  )
}

export default App
