import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "ec480dd4535c99d56c03751f69dd3a16",
        language: "en-US"
    }
});

export const movies = {
    getMovie: id =>
        api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("movie/popular"),
    getUpcoming: () => api.get("movie/upcoming"),
    getNowPlaying: () => api.get("movie/now_playing"),
    searchMovies: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tv = {
    getShow: id =>
        api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("tv/popular"),
    getAiringThisWeek: () => api.get("tv/top_rated"),
    getAiringToday: () => api.get("tv/airing_today"),
    searchTv: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};
