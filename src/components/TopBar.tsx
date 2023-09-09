import { AiOutlineUnorderedList, AiOutlineHome } from "react-icons/ai";
import config from "../config.json";
import KinecticButton from "./KinecticButton";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <div className="mb-10 flex flex-col justify-center items-center">
            <img draggable={false} alt='logo' src={config.logoUrl} className="h-28 mb-10" />

            <div className="flex space-x-3">
                <KinecticButton onClick={() => navigate("/")}>
                    <div className="flex justify-center p-3 rounded-xl w-[150px] border-gray border-[1px]">
                        <AiOutlineHome size={40} color="lightblue" />
                    </div>
                </KinecticButton>
                <KinecticButton onClick={() => navigate("/categories")}>
                    <div className="flex justify-center p-3 rounded-xl w-[150px] border-gray border-[1px]">
                        <AiOutlineUnorderedList size={40} color="lightblue" />
                    </div>
                </KinecticButton>
            </div>
        </div>
    )
}

export default TopBar;