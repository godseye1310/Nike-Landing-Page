import React from "react";
import { star } from "../../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center">
			<img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

			<div className="w-[100%] max-w-[280px] mt-5 pl-0.5">
				<div className="flex justify-start gap-2.5">
					<img src={star} alt="rating" />
					<p className="font-montserrat text-xl text-slate-gray">
						(4.8)
					</p>
				</div>
				<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
					{name}
				</h3>
				<p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
					{price}
				</p>
			</div>
		</div>
	);
};

export default PopularProductCard;
