import React, { useEffect } from "react";
import { headerLogo } from "../../assets/images/index";
import { hamburger } from "../../assets/icons/index";
import { navLinks } from "../../constants/index";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
	useEffect(() => {
		AOS.init({
			duration: 900, // Duration of animations in milliseconds
			offset: 100,
			easing: "ease-in-out", // Easing function
			once: false,
		});
	}, []);

	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav
				className="flex justify-between items-center max-container"
				data-aos="fade-down"
			>
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={30} />
				</a>

				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<div className="lg:hidden">
					<img
						src={hamburger}
						alt="hamburger"
						width={25}
						height={25}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
