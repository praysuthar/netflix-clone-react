import React, { useState, useEffect } from "react";

import requests from "../Requests";

const Main = () => {
	const [movies, setMovies] = useState([]);
	const movie = movies[Math.floor(Math.random() * movies.length)];
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTQwMmZjNzg1Zjg1MGUyZGIxM2RkYTFiNWQ0ZDM1ZiIsInN1YiI6IjY1NWY2NDk4NzA2ZTU2MDBlMTUxYzcyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTiNSP4-jO6I-vABnST1GKo-YS_bGtbVa6H27A9tf6w",
		},
	};
	useEffect(() => {
		fetch(`${requests.fetchTrending}`, options)
			.then((response) => response.json())
			.then((response) => setMovies(response.results))
			.catch((err) => console.error(err));
	}, []);

	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	};
	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px]"></div>
				<img
					className="w-full h-full object-cover"
					src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
					alt={movie?.title}
				/>
				<div className="absolute w-full top-[20%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
					<div className="my-4">
						<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
							Play
						</button>
						<button className="border text-white border-gray-300 py-2 px-5 ml-4">
							Watch Later
						</button>
						<p text-gray-400 text-sm>
							Released: {movie?.release_date}
						</p>
						<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
							{truncateString(movie?.overview, 150)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
