import React from 'react';
import './jobs.css';

const jobs = () => {
  return (
    <div className="theblog__container_jobs" id='jobs'>
      <h1>Jobs</h1>
      <div className="theblog__container_contents">
      <div classname="theblog__container_contents1">
        <h2>Php full stack web-dev</h2>
        <button>View Salary and Details</button>
      </div>

      <div classname='theblog__container_contents1'>
        <h2>UI/UX Designer</h2>
        <button>View Salary and Details</button>
      </div>

      <div classname='theblog__container_contents1'>
        <h2>Content Creator</h2>
        <button>View Salary and Details</button>
      </div>

      <div classname='theblog__container_contents1'>
        <h2>Frontend Developer</h2>
        <button>View Salary and Details</button>
      </div>

      <div classname='theblog__container_contents1'>
        <h2>Web developer and Designer</h2>
        <button>View Salary and Details</button>
      </div>
      </div>
    </div>
  )
}

export default jobs