import React from "react";

const Buttons = ({ label, iconURL, className, textColor }) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red  border-coral-red rounded-full ${className} ${
				textColor ? `${textColor}` : "text-white"
			}`}
		>
			{label}
			{iconURL && (
				<img
					src={iconURL}
					alt={label}
					className="ml-2 rounded-full w-5 h-5 "
				/>
			)}
		</button>
	);
};

export default Buttons;
