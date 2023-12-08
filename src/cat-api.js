import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    'live_mZkKEcXJLqHXef1t9jNVOwDyZs9JLzTVZOP9naBpnm2wbug63mei6fVU9YDJeHd1';

function fetchBreeds() {
    return axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            throw error;
        });
}

function fetchCatByBreed(breedId) {
    return axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            throw error;
        });
}

export { fetchBreeds, fetchCatByBreed };