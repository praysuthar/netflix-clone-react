const API_KEY = "d5402fc785f850e2db13dda1b5d4";
const requests = {
	fetchTrending: `http://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
	fetchNetflixOriginals: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&page=1`,
	fetchTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	fetchActionMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=1`,
	fetchComedyMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&page=1`,
	fetchHorrorMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&page=1`,
	fetchRomanceMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&page=1`,
	fetchDocumentaries: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99&page=1`,
};

export default requests;
