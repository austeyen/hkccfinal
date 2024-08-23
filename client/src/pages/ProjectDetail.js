import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';
import Axios from 'axios';

const ProjectDetail = () => {
  const { projectName } = useParams();

	const [link, setLink] = useState("");
	const [nav, setNav] = useState(false);
  
	const handleStart = (event) => {
    event.preventDefault();
    Axios.get("/classroom/team-os/hkccfinal/backend/webfetch/update/user1")
      .then(response => {
	      if(response.status === 200) {
		      // redirect user to link
		      setLink( "class4.hopekcc.org/classroom/team-os/student-sites/user1")
	      } else {
		      alert("error")
		     }
  })
  .catch(err => alert("Error"));
}

	const handleStop = (event) => {
	
	event.preventDefault();
	Axios.get("/classroom/team-os/hkccfinal/backend/webfetch/reset/user1")
		.then(response => {
			if (response.status !== 200) {
				alert("error")
			}
		})
		.catch(err => alert("Error"))
	}

  return (
    <div className="projects-container">
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>{projectName}</h2>
        <button className="project-button"><a href={link} target="_blank" rel="noopener noreferrer">View Project</a></button>
        <h2>           </h2>
        <button className="project-button">Upload Files</button>
        <h2>           </h2>
        <button className="project-button" onClick={handleStart}>Start</button>
        <h2>           </h2>
        <button className="project-button" onClick={handleStop}>Stop</button>
        
      </div>
    </div>
  );
};

export default ProjectDetail;
