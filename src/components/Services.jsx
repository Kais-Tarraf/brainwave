import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";

const Services = () => {
	return (
		<Section id="how-to-use">
			<div className="container">
				<Heading
					title="Generative AI made for creators."
					text="Brainwave unlocks the potential fro AI-powered applications"
				/>
				<div className="relative">
					<div
						className="relative z-1 flex items-center h-156
                    mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden
                    lg:p-20 xl:h-184"
					>
						<div>
							<img src={service1} alt="" />
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Services;
