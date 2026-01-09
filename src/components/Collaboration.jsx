import Section from "./Section";
import { collabContent, collabText } from "../constants";
import { check } from "../assets";
import Button from "./Button";
const Collaboration = () => {
	return (
		<Section crosses>
			<div className="container lg:flex">
				<div className="max-w-100">
					<h2 className="mb-4 md:mb-8">
						AI Chat App for seamless collaboration
					</h2>
					<ul className="max-w-88 mb-10 md:mb-14">
						{collabContent.map((item) => (
							<li className="mb-3 py-3" key={item.id}>
								<div className="flex items-center">
									<img src={check} alt="check" width={24} height={24} />
									<h6 className="body-2 ml-5">{item.title}</h6>
								</div>
								{item.text && (
									<p className="body-2 mt-3 text-n-4">{item.text}</p>
								)}
							</li>
						))}
					</ul>
					<Button>Try it now</Button>
				</div>
				<div className="lg:ml-auto xl:w-152 mt-4">
					<p
						className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-88
          lg:mx-auto"
					>
						{collabText}
					</p>
				</div>
			</div>
		</Section>
	);
};

export default Collaboration;
