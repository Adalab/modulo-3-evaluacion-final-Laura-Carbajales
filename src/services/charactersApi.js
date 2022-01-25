const getApiData = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: index,
          name: character.name,
          alive: character.alive,
          species: character.species,
          gender: character.gender,
          house: character.house,
          image: character.image,
        };
      });
      return cleanData;
    });
};
export default getApiData;
