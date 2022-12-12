
const callToApi = () => {

    return fetch('https://rickandmortyapi.com/api/character ')
        .then((response) => response.json())
        .then((data) => {

            const cleanData = data.results.map((user) => {
                return {
                    id: user.id,
                    name: user.name,
                    status: user.status,
                    species: user.species,
                    image: user.image,
                    planet: user.origin.name,
                    episode: user.episode.length

                }
            });

            return cleanData;

        })
        .catch((error) => console.log(`Ha sucedido un error: ${error}`));
};

export default callToApi;
