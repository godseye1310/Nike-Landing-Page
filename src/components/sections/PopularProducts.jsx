import React, { useEffect } from "react";
import { products } from "../../constants";
import PopularProductCard from "../UI/PopularProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularProducts = () => {
	useEffect(() => {
		AOS.init({
			duration: 900, // Duration of animations in milliseconds
			offset: 100,
			easing: "ease-in-out", // Easing function
			once: false,
		});
	}, []);

	return (
		<section id="products" className="max-container max-sm:mt-12 ">
			<div
				className="flex flex-col justify-start gap-5"
				data-aos="fade-up"
			>
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red">Popular</span> Products
				</h2>
				<p className="lg:max-w-full mt-2 font-montserrat">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design, and
					valueExperience top-notch quality and style with our
					sought-after selections. Discover a world of comfort,
					design, and value
				</p>
			</div>

			<div
				className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 sm:gap-y-16 gap-14"
				data-aos="fade-up"
			>
				{products.map((product) => (
					<PopularProductCard key={product.name} {...product} />
				))}
			</div>
		</section>
	);
};

export default PopularProducts;
