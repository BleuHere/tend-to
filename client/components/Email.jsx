import React from 'react'
import { useSelector } from 'react-redux'

// the idea with setting the state for the email content is
// to change the state when a certain goal is reached - for example
// all (20) plots are clear of weeds (aka all have state of soil)
// which then shows the email that guides you to fertilise the soil

// maybe, I want an array of objects (potentially an api?)
// one function ie. sendNextEmail which simply iterates over the array and
// sends the next one when the condition has been met.

function Email(props) {
  const email = useSelector((state) => state.emails)

  return (
    <div>
      <h3>Subject: {email.subject}</h3>
      <h3>From: naturelover@tend.io</h3>
      <p data-testid="email-text">{`Kia Ora ${props.userName},`}</p>
      {email.text?.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  )
}

export default Email
