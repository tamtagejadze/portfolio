import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../../Images/avatar.png';
import {BsPatchCheckFill} from 'react-icons/bs';
import Page from '../Page/Page';


function Home() {
  return (
    <Page>
        <div className="home-container">
            <img src={avatar}/>
            <h5>Hello, I'm</h5>
            <h1>Tamta Gejadze</h1>
            <h5>Frontend Developer</h5>            

            <div className="experience-container">
            
                <div className="experience-frontend">
                <h2>Areas of Expertice</h2>
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

            <button className='learn-more-btn'>
                <Link to={"/portfolio"}>Learn More</Link>
            </button>

        </div>
    </Page>
  )
}

export default Home