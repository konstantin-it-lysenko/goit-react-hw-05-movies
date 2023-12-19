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

export const getCastById = async id => {
    const { data } = await axios.get(`movie/${id}/credits`)

    return data
}

export const getReviewsById = async id => {
    const { data } = await axios.get(`movie/${id}/reviews`)

    return data
}

export const getMoviesBySearch = async (query, page) => {
    const { data } = await axios.get(`search/movie?query=${query}&page=${page}`)

    return data
}
