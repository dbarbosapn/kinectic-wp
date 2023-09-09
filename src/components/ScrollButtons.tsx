import KinecticButton from "./KinecticButton";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const ScrollAmount = 70;

const ScrollButtons = () => {
	const scrollBottom = () => {
		window.scrollBy({
			top: ScrollAmount,
			behavior: "smooth",
		});
	};

	const scrollUp = () => {
		window.scrollBy({
			top: -ScrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<>
			<KinecticButton
				className="z-50 fixed top-4 right-4"
				onHold={scrollUp}
				duration={800}
			>
				<div className="bg-gray-300 rounded-full h-[70px] w-[70px] flex justify-center items-center">
					<AiOutlineArrowUp size={50} color="white" />
				</div>
			</KinecticButton>
			<KinecticButton
				className="z-50 fixed top-24 right-4"
				onHold={scrollBottom}
				duration={800}
			>
				<div className="bg-gray-300 rounded-full h-[70px] w-[70px] flex justify-center items-center">
					<AiOutlineArrowDown size={50} color="white" />
				</div>
			</KinecticButton>
		</>
	);
};

export default ScrollButtons;
