import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchEmail } from '../actions'

const Home = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const { userName } = form.elements
    props.saveName(userName.value)
    navigate('/note-from-a-friend')
    dispatch(fetchEmail(1))
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Add your name and start the game</label>
        <input name="userName" id="userName" type="text" />
        <button type="submit">Start Game</button>
      </form>
    </div>
  )
}

export default Home
