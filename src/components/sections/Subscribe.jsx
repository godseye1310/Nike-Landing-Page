import React, { useEffect } from "react";
import Buttons from "../UI/Buttons";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
	useEffect(() => {
		AOS.init({
			duration: 900, // Duration of animations in milliseconds
			offset: 100,
			once: false,
		});
	}, []);
	return (
		<section
			id="contact-us"
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
		>
			<h3
				className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
				data-aos="fade-right"
			>
				Sign Up For
				<span className="text-coral-red"> Updates </span>& Newsletter
			</h3>

			<div
				className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
				data-aos="fade-left"
			>
				<input
					type="text"
					placeholder="subscribe@nike.com"
					className="input"
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Buttons label="Sign Up" className="w-full" />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
