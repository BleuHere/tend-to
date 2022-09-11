import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUserName } from '../actions'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const { userName } = form.elements
    navigate(`/note-from-a-friend/1`)
    dispatch(setUserName(userName.value))
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Add your name </label>
        <br />
        <input name="userName" id="userName" type="text" /> <br />
        <button className="submit" type="submit">
          Start Game
        </button>
      </form>
    </div>
  )
}

export default Home
