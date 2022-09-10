import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchEmail } from '../actions'

import { selectEmail } from '../reducers/emails'
import { selectUserName } from '../reducers/userName'

function Email() {
  const email = useSelector(selectEmail)
  const dispatch = useDispatch()
  let { id } = useParams()
  const userName = useSelector(selectUserName)

  console.log(userName)

  useEffect(() => dispatch(fetchEmail(id)), [])

  return (
    <div>
      <h3>Subject: {email.subject}</h3>
      <h3>From: naturelover@tend.io</h3>
      <p data-testid="email-text">{`Kia Ora ${userName.userName},`}</p>
      {email.text?.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      <Link to="/garden">
        <button>Play</button>
      </Link>
    </div>
  )
}

export default Email
