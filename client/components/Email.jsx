import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectEmail } from '../reducers/emails'

function Email(props) {
  const email = useSelector(selectEmail)

  return (
    <div>
      <h3>Subject: {email.subject}</h3>
      <h3>From: naturelover@tend.io</h3>
      <p data-testid="email-text">{`Kia Ora ${props.userName},`}</p>
      {email.text?.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      <Link to="/garden">
        <button>Play Phase One</button>
      </Link>
    </div>
  )
}

export default Email
