import React from 'react';
import './navbar.css';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import In from '../../assets/in.png';
import twitter from  '../../assets/twitter.png';

const navbar = () => {
  return (
      <div className="theblog__navbar_container">
        <div className="theblog__navbar_container_text1">
          <p><a href="#theblog">The Blog.</a></p>
        </div>
        <div className="theblog__navbar_container_text2">
          <p><a href="#news">News</a></p>
          <p><a href="#events">Events</a></p>
          <p><a href="#jobs">Jobs</a></p>
        </div>
        <div className="theblog__navbar_container_icons">
          <img src={ig} alt="error"/>
          <img src={fb} alt="error" />
          <img src={In} alt="error" />
          <img src={twitter} alt="error" />
        </div>
      </div>
  )
}

export default navbar