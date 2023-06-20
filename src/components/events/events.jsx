import React from 'react';
import './events.css';
import events1 from '../../assets/events1.png';
import events2 from '../../assets/events2.png';
import events3 from '../../assets/events3.png';

const events = () => {
  return (
    <div className="theblog__container_events" id='events'>
      <h1>Updates on upcoming events</h1>

      <div className="theblog__container_event">
      <div className="theblog__container_subevents1">
          <img src={events1} alt="error" />
          <h3>Date & Time <br />Sun Jun 18 2023 at 10:00 am to 11:30 am(GMT+05:30)</h3>
          <h2>RSVP for SoundRise // Duneheart - Blues rock at the Mills</h2>
          <p>Featuring Duneheart a 4-piece blues collective with roots in Vadodara and now based in Mumbai. Founded by Rushikesh Nene & Srisamarth Inamdar Duneheart was born out of a passion to introduce their hometown to the blues tradition.</p>
      </div>
      <div className="theblog__container_subevents2">
        <div className="theblog__sub1">
          <img src={events2} alt="error" />
          <h3>Date & Time <br />Sun Jun 18 2023 at 10:00 am to 11:30 am(GMT+05:30)</h3>
          <h2>First time in Mumbai: TrueConf seminar about secure video conferencing and collaboration</h2>
        </div>
        <div className="theblog__sub2">
          <img src={events3} alt="error" />
          <h3>Date & Time <br />Sun Jun 18 2023 at 10:00 am to 11:30 am(GMT+05:30)</h3>
          <h2>Shaadi Sakhi's Style Soiree~ Luxe Festive Edit</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default events