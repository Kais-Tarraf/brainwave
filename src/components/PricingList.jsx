import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
const PricingList = () => {
	return (
		<div className="flex gap-4 max-lg:flex-wrap">
			{pricing.map((item) => (
				<div
					key={item.id}
					className="w-76 max-lg:w-full
				h-full px-6 bg-n-8 border border-n-6 rounded-4xl lg:w-auto
				even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-secondary
				[&>h4]:even:text-primary  [&>h4]:last:text-danger"
				>
					<h4 className="mb-4 even:text-primary">{item.title}</h4>
					<p className="body-2 min-h-16 mb-3 text-n-1/50">{item.description}</p>
					<div className="flex items-center h-22 mb-6">
						{item.price && (
							<>
								<h3>$</h3>
								<div className="text-[5.5rem] leading-none font-bold">
									{item.price}
								</div>
							</>
						)}
					</div>
					<Button
						className={`w-full mb-6 inline-flex ${item.price && "text-n-8"}`}
						href={item.price ? "/pricing" : "mailto:khtkht661100@gmail.com"}
						white={!!item.price}
					>
						{item.price ? "Get started" : "Contact us"}
					</Button>
					<ul>
						{item.features.map((feature, index) => (
							<li
								key={index}
								className="flex items-start py-5 border-t border-n-6"
							>
								<img src={check} alt="check" width={24} height={24} />
								<p className="body-2 ml-4">{feature}</p>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default PricingList;
