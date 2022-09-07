import React from "react";
import TetrisImage from "../assets/tetrisImage.png";
import weatherImage from "../assets/weatherImage.png";
import cocktailLogo from "../assets/cocktailLogo.png";
import cryptoImage from '../assets/crypto.png'
const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Projects
					</p>
					<p className="py-6">Check out some of my recent projects</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${weatherImage})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-auto"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider text-center  justify-center m-auto">
								React JS app
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://weather-app-fo.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/FedericoOrquin/weather-react-app "
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${cocktailLogo})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS App
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://onecocktailapp.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/FedericoOrquin/Cocktail-app"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${TetrisImage})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Game
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://tetris-react-app-fo.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/FedericoOrquin/Tetris-React-app"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
						{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${cryptoImage})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Game
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://crypto-tracking-app-fo.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/FedericoOrquin/crypto-react-app"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
