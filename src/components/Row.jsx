import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([]);
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			url: `${fetchURL}`,
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTQwMmZjNzg1Zjg1MGUyZGIxM2RkYTFiNWQ0ZDM1ZiIsInN1YiI6IjY1NWY2NDk4NzA2ZTU2MDBlMTUxYzcyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTiNSP4-jO6I-vABnST1GKo-YS_bGtbVa6H27A9tf6w",
		},
	};
	useEffect(() => {
		axios.get(options);
	}, [fetchURL]);
	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relativeb flex items-center">
				<div id={"slider"}></div>
				{movies.map((item, id) => (
					<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
						<img
							src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
							alt={item?.title}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Row;
