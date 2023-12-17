import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    API_KEY: '3405a2990e159ff0db5f2b7b81775051',
}

export const getNovies = async () => {

}