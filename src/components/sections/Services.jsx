import React, { useEffect } from "react";
import { services } from "../../constants";
import ServiceCard from "../UI/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
	useEffect(() => {
		AOS.init({
			duration: 900, // Duration of animations in milliseconds
			offset: 100,
			once: false,
		});
	}, []);
	return (
		<section
			className="max-container flex justify-center flex-wrap gap-9"
			data-aos="fade-up"
		>
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
};

export default Services;
