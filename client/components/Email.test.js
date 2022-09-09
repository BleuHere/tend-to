import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Email from './Email'

describe('<Email />', () => {
  const content = {
    id: 1,
    subject: 'Thank you, and first steps',
    text: `Kia Ora, \n Thanks so much for taking care of the garden. It means so much to me that you’d take care of my plot while I’m away. \n Your first task will be to prepare the soil. Start by pulling out all the weeds. \n Kindest, \n your friend`,
  }
  it('displays email subject text', () => {
    render(<Email sendNextGuide={content} />)
    const heading = screen.getAllByRole('heading', { level: 3 })
    expect(heading[0]).toHaveTextContent('Subject: Thank you')
  })
  it('displays email text content', () => {
    render(<Email sendNextGuide={content} />)
    const p = screen.getByTestId('email-text')
    expect(p).toHaveTextContent('Kia Ora')
  })
})
