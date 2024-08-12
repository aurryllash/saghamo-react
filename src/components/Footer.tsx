import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Button } from '@headlessui/react'

const Footer = () => {

    const [value, setValue] = useState('')

    const handelSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(value)
    }
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className="footer-subscription-heading">
            Subscribe to get notified about new products
            </p>
            <div className="input-areas">
                <form onSubmit={handelSubmit}>
                    <input type="email" name='email' value={value} placeholder='Your Email'
                    className='footer-input w-[100%] text-black' onChange={(e) => setValue(e.target.value)} />
                    <Button type='submit' className='rounded w-[100%] bg-black py-[12px] px-5  text-white data-[hover]:bg-transparent data-[active]:bg-white data-[active]:text-black' >SUBSCRIBE</Button>
                </form>
            </div>
        </section>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/#' className='social-logo'>
                    <img src="public/Images/8b943d5edbe2793288a6224bffc37133.png"
                    className='h-8 w-auto' alt="website logo" />
                    </Link>
                </div>
                <small className='website-rights'>SAYDUMLO © 2024</small>
                <div className="social-icons">
                    <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer