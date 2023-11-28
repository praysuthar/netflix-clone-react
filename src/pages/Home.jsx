import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
const Home = () => {
	return (
		<div>
			<Main />
			<Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginals} />
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
			<Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
};

export default Home;
