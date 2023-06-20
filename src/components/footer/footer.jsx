import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <div className="theblog__footer_container">
      <div className="theblog__footer_sub">

        <div className="theblog__footer_section1">
          <h1>The Blog.</h1>
          <p>Daily updates on news with <br />interesting articles and guides on <br /> modern technology and fashion .</p>
          <button>Read more..</button>
        </div>

        <div className="theblog__footer_section2">
          <h1>Company</h1>
          <div />
          <p>The Blog</p>
          <p>News</p>
          <p>Events</p>
          <p>Jobs</p>
        </div>

        <div className="theblog__footer_section3">
          <h1>Categories</h1>
          <div />
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>

        </div>
      </div>

      <div className="theblog__footer_sub1">
        {/* &copy; */}
        <p>Copyright &#169; 2023 The Blog. All rights reserved .</p>
      </div>
    </div>
  )
}

export default footer