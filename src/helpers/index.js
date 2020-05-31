import axios from 'axios'

const apiKey = "c246377228c7d24a2e3e7dc397ca7ee4";

const urlBase = "https://api.themoviedb.org/3/"

export const getTrending = async () => {
    const media_type = "all";
    const time_window = 'day'; // this is for me for understanding - it fact it is possible to write in whole line
    return await axios.get(`${urlBase}trending/${media_type}/${time_window}?api_key=${apiKey}`) 
}

export const searchMovie = async (query) => {
    return await axios.get(`${urlBase}search/movie?query=${query}&api_key=${apiKey}`)
}

export const getMovieDetales = async(movieId) => {
    return await axios.get(`${urlBase}movie/${movieId}?api_key=${apiKey}`)
}

export const getCredits = async (movieId) => {
    return await axios.get(`${urlBase}movie/${movieId}/credits?api_key=${apiKey}`)
}

export const getReviews = async (movieId) => {
    return await axios.get(`${urlBase}movie/${movieId}/reviews?api_key=${apiKey}`)
} 

export const posterUrl = "https://image.tmdb.org/t/p/w500";
export const profileUrl = "http://image.tmdb.org/t/p/w185";