import React, { useEffect, useState } from "react";
import Buttons from "../UI/Buttons";
import { arrowRight } from "../../assets/icons";
import { shoes, statistics } from "../../constants";
import { bigShoe1 } from "../../assets/images";
import ShoeCard from "../UI/ShoeCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

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
			id="home"
			className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
				<p
					className="text-xl font-montserrat text-coral-red"
					data-aos="fade-right"
				>
					Our Summer collections
				</p>

				<h1
					className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-20"
					data-aos="fade-right"
				>
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">
						Nike
					</span>{" "}
					Shoes
				</h1>
				<p
					className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
					data-aos="fade-right"
				>
					Discover stylish Nike arrivals, quality comfort, and
					innovation for your active life.
				</p>

				<div data-aos="fade-right">
					<Buttons label="Shop now" iconURL={arrowRight} />
				</div>

				<div
					className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
					data-aos="fade-up"
				>
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className="text-4xl font-palanquin font-bold">
								{stat.value}
							</p>
							<p className="leading-7 font-montserrat text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div
				className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
				data-aos="fade-left"
			>
				<img
					src={bigShoeImg}
					alt="shoe colletion"
					width={610}
					height={502}
					className="object-contain relative z-10"
				/>

				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe, index) => (
						<div key={index}>
							<ShoeCard
								index={index}
								imgURL={shoe}
								changeBigShoeImage={(shoe) =>
									setBigShoeImg(shoe)
								}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
