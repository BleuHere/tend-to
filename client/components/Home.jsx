import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchEmail } from '../actions'

const Home = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const { userName } = form.elements
    props.saveName(userName.value)
    // dispatch(getEmailById(1))
    navigate('/note-from-a-friend')
    dispatch(fetchEmail(1))
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
