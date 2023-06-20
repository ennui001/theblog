import React from 'react';
import './news.css';
import N1 from '../../assets/news1.png';
import N2 from '../../assets/news2.png';
import N3 from '../../assets/news3.png';
import N4 from '../../assets/news4.png';
import N5 from '../../assets/new5.png';

const news = () => {
  return (
    <div className="theblog__news_container" id='news'>
      <div className="theblog__news_feeds">
        <h1>News Feeds</h1>
      </div>
      <div className="theblog__news_sub_container">
        <div>
          <img src={N1} alt="error" />
          <h3>16 June 2023</h3>
          <h1>Tripura eyes self-reliance in animal feed production</h1>
          <p>Agartala: Besides setting a target to become self-reliant in fish, egg, meat and milk production in the next five years .</p>
          <h4>Read more...</h4>

          <img src={N2} alt="error" />
          <h3>16 June 2023</h3>
          <p>Are you ready to explore the best adventure fiction books in India that are </p>
          <h4>Read more...</h4>

        </div>
        <div className='theblog__twitterimg'>
          <img src={N3} alt="error" />
          <h3>16 June 2023</h3>
          <h1>From everything on Twitter to Spotify's new feed, these are the worst app updates of 2023 so far</h1>
          <p>Have you noticed that a lot of the things you love keep getting worse for no reason?If so, you are not alone. The first half of 2023 has gifted us with a plethora of big-time updates to our favorite apps, like Twitter, HBO Max, and Netflix.</p>
          <h4>Read more...</h4>

          <img src={N4} alt="error" />
          <h3>16 June 2023</h3>
          <h3>Karnataka: Egg prices soar 12% amid heatwave, hike in chicken feed prices</h3>
          <p>Egg prices have seen an approximate 12 per cent increase in the last month, largely due to the soaring temperatures and the rising cost of chicken feed.</p>
          <h4>Read more...</h4>

        </div>
        <div>
          <img src={N4} alt="error" />
          <h3>16 June 2023</h3>
          <h3>Karnataka: Egg prices soar 12% amid heatwave, hike in chicken feed prices</h3>
          <p>Egg prices have seen an approximate 12 per cent increase in the last month, largely due to the soaring temperatures and the rising cost of chicken feed.</p>
          <h4>Read more... </h4>

          <img src={N5} alt="error" />
          <h3>16 June 2023</h3>
          <h3>West Bengal Governor Ananda Bose visits violence-hit Bhangar, says perpetrators will be silenced permanently</h3>
          <h4>Read more...</h4>
          
        </div>
      </div>
    </div>
  )
}

export default news