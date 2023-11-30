import React from 'react';
import './App.css'; // Import your CSS file

import painting1 from './images/painting1.png';
import painting2 from './images/painting2.png';
import painting3 from './images/painting3.png';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="empty-side"></div>
        <h1>Maryam Zubair</h1>
        <p>My Interests!!!</p>
        <p> I'm deeply passionate about event planning, painting, and chess. I invite you to accompany me on my exploration of these interests.
        </p>
      </header>

      <section className="App-content">
        <article className="Event Planning">
          <h2>Event Planning</h2>
          <p>I've had the incredible opportunity to cover events where 
            I personally handled everything from decor to managing the entire event
            from the ground up. This venture has been a labor of love, and I'm thrilled to share my journey with you. 
            You can explore more about my work and stay updated with my latest event creations by visiting my{' '}
          <a href="https://www.facebook.com/profile.php?id=100063675564956" target="_blank" rel="noopener noreferrer">
          Facebook page
          </a>
          . Join me in reliving some of the most memorable moments and get a glimpse of what goes into making every event truly special.
          </p>
        </article>

        <article className="Painting">
          <h2>Painting</h2>
          <p>In my free time, I have a deep passion for painting.
            I often find solace in creating art, especially when I paint Quranic verses that resonate with my soul. It's not just a hobby; it's a source of spiritual satisfaction for me.
            Here are a few of my creations:
          </p>
          <div className="image">
            <img src={painting1} alt="Painting 1" />
            <img src={painting2} alt="Painting 2" />
            <img src={painting3} alt="Painting 3" />
          </div>
        </article>

        <article className="Chess">
          <h2>Chess</h2>
          <p>
            I'm an avid chess player, and whenever I find some free time, 
            you can often find me immersed in online chess games.
            If you share the same enthusiasm for chess or would like to challenge me to a game, 
            feel free to add me as a friend on <a href="https://www.chess.com/member/maryamzubair" target="_blank" rel="noopener noreferrer">chess.com</a>. 
            Let's enjoy the beauty of this timeless game together!
          </p>
        </article>
      </section>

      <aside className="App-sidebar">
        <section className="App-section">
          <h2>Categories</h2>
          <ul className="App-list">
            <li>Painting</li>
            <li>Chess</li>
            <li>Event Planning</li>
          </ul>
        </section>

        <section className="App-section">
          <h2>Tags</h2>
          <ul className="App-list">
            <li>Oil Painting</li>
            <li>Event Decor</li>
            <li>Chess Strategies</li>
          </ul>
        </section>
    </aside>


      <footer className="App-footer">
        <p>&copy; 2023 React Styling Assignment</p>
        <p>Contact: <a href="mailto:your.email@example.com">mariyam051@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
