import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Benefits = () => {
	const scrollRef = useRef();
	useGSAP(
		() => {
			gsap.from(".card", {
				y: 80,
				opacity: 0,
				scale: 0.95,
				duration: 0.8,
				ease: "power3.out",
				stagger: {
					each: 0.2,
					from: "start",
				},
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top 75%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: scrollRef }
	);
	return (
		<Section id="features">
			<div className="container relative z-2">
				<Heading
					className="md:max-w-mb lg:max-w-2xl"
					title="Chat Smarter, Not Harder with Brainwave"
				/>
				<div
					ref={scrollRef}
					className="flex flex-wrap justify-center gap-10 mb-10"
				>
					{benefits.map((item) => (
						<div
							key={item.id}
							className="block relative p-0.5
						bg-no-repeat bg-size-[100%_100%] md:max-w-[24rem] card
						"
							style={{ backgroundImage: `url(${item.backgroundUrl})` }}
						>
							<div
								className="relative z-2 flex flex-col 
							min-h-88 p-[2.4rem] pointer-events-none"
							>
								<h5 className="h2 mb-5">{item.title}</h5>
								<p className="body-2 mb-6 text-n-3">{item.text}</p>
								<div className="flex items-center mt-auto">
									<img
										src={item.iconUrl}
										width={48}
										height={48}
										alt={item.title}
									/>
									<p
										className="ml-auto font-code text-xs 
										font-bold text-n-1 uppercase tracking-wider"
									>
										Explore More
									</p>
									<Arrow />
								</div>
							</div>
							{item.light && <GradientLight />}
							<div
								className="absolute inset-0.5 bg-n-8"
								style={{
									clipPath: "url(#benefits)",
								}}
							>
								<div
									className="absolute inset-0 opacity-0
								transition-opacity hover:opacity-10"
								>
									{item.imageUrl && (
										<img
											src={item.imageUrl}
											width={380}
											height={362}
											alt={item.title}
											className="w-full h-full object-cover"
										/>
									)}
								</div>
							</div>
							<ClipPath />
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Benefits;
