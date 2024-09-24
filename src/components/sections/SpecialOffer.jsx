import React from "react";
import { offer } from "../../assets/images";
import Buttons from "../UI/Buttons";
import { arrowRight } from "../../assets/icons";

const SpecialOffer = () => {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			<div>
				<img
					src={offer}
					width={773}
					height={987}
					className="object-contain w-full"
				/>
			</div>

			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-sm">
					<span className="text-coral-red"> Special </span> Offer
				</h2>

				<p className="mt-4 lg:max-w-lg info-text">
					Embark on a shopping journey that redefines your experience
					with unbeatable deals. From premier selections to incredible
					savings, we offer unparalleled value that sets us apart.
					<br />
					<br />
					Navigate a realm of possibilities designed to fulfill your
					unique desires, surpassing the loftiest expectations. Your
					journey with us is nothing short of exceptional.
				</p>

				<div className="mt-11 flex flex-wrap gap-5">
					<Buttons label="Shop Now" iconURL={arrowRight} />

					<Buttons
						label="Learn more"
						className="bg-white border border-slate-gray text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
