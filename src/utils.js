export function getEpisodesWithCharacters(episodes = [], characters = []) {
   const episodesWithCharacters = [];

   episodes.forEach((episode) => {
      const episodeCharacters = characters.filter((character) =>
         episode.characters.includes(character.url) ? character : null
      );

      episodesWithCharacters.push({
         ...episode,
         characters: [...episodeCharacters]
      });
   });

   return episodesWithCharacters;
}
