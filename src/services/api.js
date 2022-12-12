// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos a la API
    return fetch('https:')
        .then((response) => response.json())
        .then((response) => {
            // Cuando responde la API podemos limpiar los datos aquí
            const result = {
                name: response.name,
                birthYear: response.birth_year,
                height: response.height,
                mass: response.mass,
                eyeColor: response.eye_color,
            };
            return result;
        });
};

export default callToApi;
