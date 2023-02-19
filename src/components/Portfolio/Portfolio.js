import React from 'react'
import Page from '../Page/Page';
import weather from '../../Images/weather.jpg';
import calculator from '../../Images/calculator-1.png';
import shopping from '../../Images/shopping.png';
import friendlist from '../../Images/friendlist.jpg';
import registration from '../../Images/registration.png';
import tech from '../../Images/tech.jpg';


const data = [
    {
      id: 1,
      image:  tech,
      title: 'Tech Summit',
      github: 'https://github.com/tamtagejadze/it-summit.git',
    },
    {
      id: 2,
      image: shopping,
      title: 'Online Shop',
      github: 'https://github.com/tamtagejadze/shop.git',
   },
    {
      id: 3,
      image:  registration,
      title: 'Registration Form',
      github: 'https://github.com/tamtagejadze/registration.git',
    },
    {
      id: 4,
      image: friendlist,
      title: 'Social Network',
      github: 'https://github.com/tamtagejadze/task3.git',
    },
     {
        id: 5,
        image:  calculator,
        title: 'Calculator',
        github: 'https://github.com/tamtagejadze/calculator.git',
      },
    {
      id: 6,
      image: weather,
      title: 'Weather',
      github: 'https://github.com/tamtagejadze/Weather.git',
    }
  ]
  
  
  function Portfolio() {
    return (
        <Page>
            <section className='portfolio'>
                <div className='portfolio-div-title'><h2>My Recent Works</h2></div>
        
                <div className="portfolio-container">
                {
                    data.map(({id, image, title, github}) => {
                    return (
                        <article key={id} className='portfolio-item'>
                        <div>
                            <img className="portfolio-item-image" src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio-item-git'>
                            <a href={github} className='portfolio-btn' target='_blank'>Github</a>
                        </div>
                        </article>
                    )
                    })
                }
                </div>
            </section>
      </Page>
    )
  }
  
  export default Portfolio