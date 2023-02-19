import React from 'react'
import Page from '../Page/Page';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdMail} from 'react-icons/md';


function Contact() {
  return (
    <Page>
        <div className='contact-div'>
            <h2>Contact Details</h2>
            <div className='phone'>
                <BsFillTelephoneFill/>
                <span>(+995) 593306107</span>
            </div>
            <div className='email'>
                <MdMail/>
                <a href="mailto:gejadzetamta@gmail.com" target='_blank'>gejadzetamta@gmail.com</a>
            </div>
        </div>
    </Page>
  )
}

export default Contact