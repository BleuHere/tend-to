import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const { userName } = form.elements
    props.saveName(userName.value)
    navigate('/note-from-a-friend')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          type="text"
          // value={userName}
          placeholder="your name here"
        />

        <input type="submit" />
      </form>
    </div>
  )
}

export default Home
