import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Want to know more? <br className='sm-block hidden'/>
        Lets Have a chat!
        </p>
        <Link to='/contact' className='btn'>Contact Me</Link>
    </section>
  )
}

export default CTA