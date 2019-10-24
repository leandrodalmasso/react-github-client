// Dependencies
import React from 'react';

// Styles
import './styles.scss';

// Components
import TextCard from '../../components/TextCard';

// Assets
import collabocats from '../../assets/images/collabocats.png';

function Home() {
  return (
    <div className='home'>
      <img
        alt=""
        className="home__img"
        src={collabocats}
      />
      <div className="home__text-card">
        <TextCard
          color="green"
          redirectRoute="/users"
          text="If you want to search your friends profiles go to the Users tab!"
        />
      </div>
      <div className="home__text-card home__text-card--right">
        <TextCard
          color="blue"
          redirectRoute="/popular"
          text="Check the Popular section to see the most popular repos on the platform."
        />
      </div>
      <div className="home__text-card">
        <TextCard
          color="green"
          redirectRoute="/repos"
          text="Also, you can go to the Repos section and search for something you like to see the best repos available on Github!"
        />
      </div>
    </div>
  );
}

export default Home;