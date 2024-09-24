import React, { useEffect } from "react";
import { reviews } from "../../constants";
import { ReviewCard } from "../UI/ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerReviews = () => {
	useEffect(() => {
		AOS.init({
			duration: 900, // Duration of animations in milliseconds
			offset: 100,
			once: false,
		});
	}, []);
	return (
		<section className="max-container">
			<h3
				className="font-palanquin text-center text-4xl font-bold"
				data-aos="flip-up"
			>
				What Our <span className="text-coral-red">Customer</span> Say
			</h3>
			<p
				className="info-text m-auto mt-4 max-w-lg text-center"
				data-aos="fade-up"
			>
				Hear genuine stories from our satisfied customers about their
				exceptional experiences with us.
			</p>
			<div
				className="mt-24 flex-1 flex justify-evenly items-center max-lg:flex-col gap-14"
				data-aos="fade-up"
			>
				{reviews.map((review) => (
					<ReviewCard key={review.customerName} {...review} />
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
