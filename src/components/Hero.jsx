import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notificiton from "./Notificiton";
import CompanyLogos from "./CompanyLogos";
const Hero = () => {
	const parallaxRef = useRef(null);
	return (
		<Section
			className="pt-48 -mt-21"
			crosses
			crossesOffset="lg:translate-y-[5.25rem]"
			customPaddings
			id="hero"
		>
			<div className="container relative" ref={parallaxRef}>
				<div
					className="relative z-1 max-w-248 mx-auto text-center
                 mb-16 md:mb-20 lg:mb-16"
				>
					<h1 className="mb-6">
						Explore the Possibiltes of AI Chatting with
						<span className="inline-block relative">
							Brainwave
							<img
								src={curve}
								className="absolute top-full left-0 w-full xl:-mt-2"
								width={624}
								height={28}
								alt="curve"
							/>
						</span>
					</h1>
					<p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
						Unleash the power of AI within Brainwave. Upgrade your productivity
						with Brainwave, the open AI chat app.
					</p>
					<Button href="/pricing" className="inline-flex">
						Get started
					</Button>
				</div>
				<div className="relative max-w-92 mx-auto md:max-w-5xl xl:mb-24">
					<div className="relative z-1 p-0.5 rounded-2xl bg-conic">
						<div className="relative bg-n-8 rounded-2xl">
							<div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
							<div
								className="aspect-33/40 rounded-b-[0.9rem]
							overflow-hidden md:aspect-688/490 lg:aspect-1024/490"
							>
								<img
									src={robot}
									className="w-full scale-[1.7] 
									translate-y-[8%] md:scale-[1] 
									md:-translate-y-[10%] lg:-translate-y-[23%]"
									width={1024}
									height={490}
									alt="AI"
								/>
								<Generating
									className="absolute left-4 right-4
								bottom-5 md:left-1/2 md:right-auto 
								md:bottom-8 md:w-124 md:-translate-x-1/2"
								/>
								<ScrollParallax isAbsolutelyPositioned>
									<ul
										className="hidden absolute 
									-left-22 bottom-30 px-1 py-1 
									bg-n-9/40 backdrop-blur border 
									border-n-1/10 rounded-2xl xl:flex"
									>
										{heroIcons.map((icon, index) => (
											<li className="p-5" key={index}>
												<img src={icon} alt={icon} width={24} height={25} />
											</li>
										))}
									</ul>
								</ScrollParallax>
								<ScrollParallax isAbsolutelyPositioned>
									<Notificiton
										className="hidden absolute 
									-right-22 bottom-44 w-[18rem] xl:flex"
										title="Code Generation"
									/>
								</ScrollParallax>
							</div>
						</div>
						<Gradient />
					</div>
					<div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
						<img
							src={heroBackground}
							className="w-full"
							width={1440}
							height={1800}
							alt="hero"
						/>
					</div>
					<BackgroundCircles />
				</div>
				<CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
			</div>
			<BottomLine />
		</Section>
	);
};

export default Hero;
