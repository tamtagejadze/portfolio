import React from 'react'
import Page from '../Page/Page';
import {BsPatchCheckFill} from 'react-icons/bs';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdMail} from 'react-icons/md';


function Contact() {
  return (
    <Page>
        <section className='experience'>
        <h2>My Experience</h2>

        <div className="experience-container">
            <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
                <article className='expirience-details'>
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                <h4>HTML</h4>
                </div>
                </article>
                <article className='expirience-details'>
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                <h4>CSS</h4>
                </div>
                </article>
                <article className='expirience-details'>
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                <h4>JavaScript</h4>
                </div>
                </article>
                <article className='expirience-details'>
                <BsPatchCheckFill className='experience-details-icon' />
                <div>
                <h4>React</h4>
                </div>
                </article>
            </div>
            </div>
        </div>
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
        </section>
    </Page>
  )
}

export default Contact