import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";

const Pricing = () => {
	return (
		<Section className="overflow-hidden" id="pricing">
			<div className="container relative z-2">
				<div className="hidden relative justify-center mb-26 lg:flex">
					<img
						src={smallSphere}
						alt="sphere"
						className="relative z-1"
						width={255}
						height={255}
					/>
					<div
						className="absolute top-1/2 left-1/2 w-240 
            -translate-x-1/2 -translate-y-1/2 pointer-events-none"
					>
						<img
							src={stars}
							className="w-full"
							width={950}
							height={400}
							alt="stars"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Pricing;
