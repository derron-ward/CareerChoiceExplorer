import React from 'react'
import '../compnents/Home.css'


function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <div className="container">
      <div className="left-column">
        <p>Choosing a good career is one of the most important decisions a person can make in their life. A career is more than just a job; it's a long-term commitment that can have a profound impact on an individual's happiness, financial stability, and overall well-being. Making a wise career choice can help someone achieve their professional goals and allow them to pursue their passions, while also providing financial security and a sense of fulfillment. On the other hand, a poor career choice can lead to dissatisfaction, stress, and even financial hardship. Therefore, it's crucial for individuals to carefully consider their interests, strengths, and values when selecting a career path that aligns with their long-term goals and aspirations.</p>
      </div>
      <div className="right-column">
        <h2>Search for a job</h2>
      </div>
    </div>
    </div>
  );
}

export default Home