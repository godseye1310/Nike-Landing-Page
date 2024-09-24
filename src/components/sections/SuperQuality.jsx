import React, { useEffect } from "react";
import Buttons from "../UI/Buttons";
import { shoe8 } from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

const SuperQuality = () => {
	useEffect(() => {
		AOS.init({
			duration: 900, // Duration of animations in milliseconds
			offset: 100,
			easing: "ease-in-out", // Easing function
			once: false,
		});
	}, []);
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<div className="flex flex-1 flex-col" data-aos="fade-right">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-sm">
					We Provide You
					<span className="text-coral-red"> Super Quality</span> Shoes
				</h2>

				<p className="mt-4 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulously crafted
					footwear is designed to elevate your experience, providing
					you with unmatched quality, innovation, and a touch of
					elegance.
					<br />
					<br />
					Our dedication to detail and excellence ensures your
					satisfaction
				</p>

				<div className="mt-11">
					<Buttons label="View Details" />
				</div>
			</div>

			<div
				className="flex-1 flex justify-center items-center"
				data-aos="fade-left"
			>
				<img
					src={shoe8}
					alt="super shoe"
					width={570}
					height={522}
					className="object-contain"
				/>
			</div>
		</section>
	);
};

export default SuperQuality;
