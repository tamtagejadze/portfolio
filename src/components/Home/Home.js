import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../Page/Page'

function Home() {
  return (
    <Page>
        <div className="home-container">
            <h5>Hello, I'm</h5>
            <h1>Tamta Gejadze</h1>
            <h5>React Developper</h5>
            <button className='learn-more-btn'>
                <Link to={"/contact"}>Learn More</Link>
            </button>
        </div>
    </Page>
  )
}

export default Home