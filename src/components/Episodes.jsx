import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEpisodesWithCharacters } from "../utils";

const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

const Episodes = () => {
   const [episodes, setEpisodes] = useState([]);
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      const fetchEpisodes = async () => {
         const response = await axios.get(EPISODES_URL);
         const data = response.data;
         setEpisodes(data.results);
      };
      fetchEpisodes();
   }, []);

   useEffect(() => {
      const fetchCharacters = async () => {
         const responses = await Promise.all(urls.map((url) => axios.get(url)));
         const results = responses.map((response) => response.data);
         setCharacters(results);
      };
      fetchCharacters();
   }, [episodes]);

   episodes.map((episode) => {
      episode.characters = episode.characters.filter(
         (character, index) => index <= 9
      );
   });

   const firstTenCharactersUrl = new Set();

   episodes.forEach((episode) => {
      episode.characters.forEach((characterUrl) => {
         firstTenCharactersUrl.add(characterUrl);
      });
   });

   const urls = Array.from(firstTenCharactersUrl);

   const EpisodesWithCharacters = getEpisodesWithCharacters(
      episodes,
      characters
   );

   return (
      <div>
         {EpisodesWithCharacters.map((episode) => (
            <div key={episode.id}>
               <h2>
                  {episode.id}. {episode.name} - {episode.episode}
               </h2>
               <h2>
                  Fecha al aire: <span>{episode.air_date}</span>
               </h2>
               <h2>Personajes:</h2>
               <div className="characters-box">
                  <code>
                     {episode.characters.map((character) => (
                        <p key={character.id}>
                           {" "}
                           - {character.name} - {character.species}
                        </p>
                     ))}
                  </code>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Episodes;
