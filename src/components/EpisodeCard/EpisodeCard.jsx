import React from 'react';
import './episodeCard.css';

const EpisodeCard = ({ episodesWithCharacters }) => {
  return (
    <>
      {episodesWithCharacters.map((episode) => (
        <div key={episode.id} className='episode-card'>
          <h2>
            {episode.id}. {episode.name} - {episode.episode}
          </h2>
          <h2>
            Air Date: <span>{episode.air_date}</span>
          </h2>
          <h2>Characters:</h2>
          <div className='characters-container'>
            <code>
              <ul className='characters-list'>
                {episode.characters.map((character) => (
                  <li key={character.id} className='character-info'>
                    {character.name} - {character.species}
                  </li>
                ))}
              </ul>
            </code>
          </div>
        </div>
      ))}
    </>
  );
};

export default EpisodeCard;
