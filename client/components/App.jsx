import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Email from './Email'
import Garden from './Garden'
import Home from './Home'

const App = () => {
  const [name, setName] = useState('')

  return (
    <>
      <h1>Tend Gardening Game</h1>
      <Routes>
        <Route path="/" element={<Home saveName={setName} />} />
        <Route path="/note-from-a-friend" element={<Email userName={name} />} />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </>
  )
}

export default App
