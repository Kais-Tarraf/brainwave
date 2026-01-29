import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";

const Roadmap = () => {
	return (
		<Section className="overflow-hidden" id="roadmap">
			<div className="container md:pb-10">
				<Heading tag="Ready to get started" title="What we're working on" />
				<div
					className="relative grid gap-6 md:grid-cols-2
                md:gap-4 md:pb-28"
				>
					{roadmap.map((item) => {
						const status = item.status === "done" ? "Done" : "In progress";
						return (
							<div
								key={item.id}
								className={`md:flex even:md:translate-y-28 p-0.25 rounded-[2.5rem] ${
									item.colorful ? "bg-conic" : "bg-n-6"
								}`}
							>
								<div>
									<div>
										<img
											src={grid}
											alt="grid"
											className="w-full"
											width={550}
											height={550}
										/>
									</div>
									<div className="relative z-1">
										<div className="flex ietms-center justify-between">
											<Tagline>{item.date}</Tagline>
											<div>
												<img
													src={item.status === "done" ? check2 : loading1}
													alt={status}
													width={16}
													height={16}
													className="mr-2.5"
												/>
												<div className="tagline">{status}</div>
											</div>
											<div className="mb-10">
												<img
													src={item.imageUrl}
													className="w-full"
													width={630}
													height={420}
													alt={item.title}
												/>
											</div>
											<h4 className="mb-4">{item.title}</h4>
											<p className="body-2 text-n-4">{item.text}</p>{" "}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Section>
	);
};

export default Roadmap;
