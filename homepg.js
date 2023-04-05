import React from 'react';
import './loginpg1.css';

const Homepg = () => {
  return (
    <div className='fronts'>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1>Explore the world</h1>
          <p>“I dont need to get a life, I am a gamer, I have lots of lives.”</p>
          <a href="https://www.youtube.com/@keralatourism" className="button">Explore it</a>
        </section>
        
        <section className="featured-games">
          <h2>Features of travel</h2>
          <ul>
            <li>
              <img src="https://tse4.mm.bing.net/th?id=OIP.Tk0rPp6HVDmIoTALCuxbtgHaLH&pid=Api&P=0" alt="Game 1" />
              <h3>KERALA</h3>
              <p>Cricket 22 is a 2021 cricket video game developed by Big Ant Studios and published by Nacon.[1] It is the official video game of the 2021–22 Ashes series of cricket matches, and the sequel to the 2019 game Cricket 19. It released on the 2 December 2021 as a curtain-raiser prior to the start of the 2021–22 Ashes series which were held in Australia in December 2021.</p>
            </li>
            <li>
              <img src="https://tse1.mm.bing.net/th?id=OIP.HyjU2tItxGqeu1piwJogEQHaE8&pid=Api&P=0" alt="Game 2" />
              <h3>BOAT RIDE</h3>
              <p>Hitman is an action-adventure stealth video game in which players control a genetically enhanced assassin called Agent 47 from a third-person perspective as he carries out assassinations of various targets across the globe. As in other games in the Hitman series, players have a large amount of freedom in their approach to their assassinations.</p>
            </li>
            <li>
              <img src="https://tse3.mm.bing.net/th?id=OIP.0-phvKKvjfunJ2i_5J2m4wHaEK&pid=Api&P=0" alt="Game 3" />
              <h3>NIGHT SPOT</h3>
              <p>WWE 2K23 is Even Stronger with Expanded features, gorgeous graphics, and the ultimate WWE experience. 
              interactive sports documentary focusing on the 20-year career of John Cena and WarGames is finally here!its debut in WWE 2K23 and delivers heart-pounding 3v3 and 4v4 multiplayer mayhem,This fan-favorite action-packed WarGames makes its debut!</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Homepg;