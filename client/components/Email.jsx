import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchEmail, savePhaseOne } from '../actions'

import { selectEmail } from '../reducers/emails'
import { selectPlots } from '../reducers/plots'
import { selectUserName } from '../reducers/userName'

function Email() {
  const email = useSelector(selectEmail)
  const dispatch = useDispatch()
  let { id } = useParams()
  const userName = useSelector(selectUserName)
  const plots = useSelector(selectPlots)

  console.log(userName)

  useEffect(() => dispatch(fetchEmail(id)), [])

  function handleClick() {
    if (email.id === 2) {
      dispatch(savePhaseOne(plots))
    }
  }

  return (
    <div>
      <h3>Subject: {email.subject}</h3>
      <h3>From: naturelover@tend.io</h3>
      <p data-testid="email-text">{`Kia Ora ${userName.userName},`}</p>
      {email.text?.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      <Link to="/garden">
        <button onClick={handleClick}>Play</button>
      </Link>
    </div>
  )
}

export default Email
