import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: '3405a2990e159ff0db5f2b7b81775051',
}

export const getTranding = async () => {
    const { data } = await axios.get('trending/movie/week')

    return data.results
}

export const getMovieById = async (id) => {
    const { data } = await axios.get(`movie/${id}`)

    return data
}