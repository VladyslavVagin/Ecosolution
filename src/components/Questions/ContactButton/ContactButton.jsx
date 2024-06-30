import React from 'react'
import Button from '../../Common/Button/Button'
import { FlexContainer } from './ContactButton.styled'

const ContactButton = () => {
  return (
    <FlexContainer>
        <p>Didn't find the answer to your question?</p>
        <Button text="Contact Us" link='#contacts' />
    </FlexContainer>
  )
}

export default ContactButton