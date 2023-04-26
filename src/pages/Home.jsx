import React, { useEffect } from 'react';
import '../components/Home.css';
import jobImage from '../assets/jobSearch.jpg';
//import client from '../components/connectDB.jsx';



function Home() {
  return (
    <div>
      <div class = "webpage">
      <div class="header">
      </div>
      <div className="container">
      <div className="left-column">
          <div class="mainBody">
          <h2 class ="MainBodyTitle">What does your future look like?</h2>
          <h3>A career is more than just a job</h3>
          <p class="mainBodyParagraph">Choosing a good career is one of the most important decisions a person can make in their life. A career is a long-term commitment that can have a profound impact on an individual's happiness, financial stability, and overall well-being. Making a wise career choice can help someone achieve their professional goals and allow them to pursue their passions, while also providing financial security and a sense of fulfillment. On the other hand, a poor career choice can lead to dissatisfaction, stress, and even financial hardship. Therefore, it's crucial for individuals to carefully consider their interests, strengths, and values when selecting a career path that aligns with their long-term goals and aspirations.</p>
        </div>  
      </div>
      <div className="right-column">
        <img class="JobSearchImage" src={jobImage} alt="My image"></img>
        <h3 class="JobSearchTitle">Search for Careers by Job Title, Industry, Degree or Use Keywords</h3>
        <form class="searchForm"><input type="text" placeholder="Search Job Here"/>
        <button class="searchButton">Search</button>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home