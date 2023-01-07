import React from 'react'
import Page from '../Page/Page';
import weather from '../../Images/weather.jpg';
import calculator from '../../Images/calculator.png';
import shopping from '../../Images/shopping.png';
import friendlist from '../../Images/friendlist.jpg';


const data = [
    {
        id: 1,
        image: shopping,
        title: 'Online Shop',
        github: 'https://github.com/tamtagejadze/shop.git',
    },
    {
      id: 2,
      image: friendlist,
      title: 'Friend List',
      github: 'https://github.com/tamtagejadze/task3.git',
    },
      {
        id: 3,
        image:  calculator,
        title: 'Calculator',
        github: 'https://github.com/tamtagejadze/calculator.git',
      },
    {
      id: 4,
      image: weather,
      title: 'Weather',
      github: 'https://github.com/tamtagejadze/Weather.git',
    }
  ]
  
  
  function Portfolio() {
    return (
        <Page>
            <section className='portfolio'>
                <h2>My Recent Works</h2>
        
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