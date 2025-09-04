import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import { Route, Routes } from 'react-router-dom'
import ContactDetail from '../components/ContactDetail'

const ContactUs = () => {
  return (
    <div className='ContactUs'>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactDetail/>}/>
          <Route path='/contactForm' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default ContactUs