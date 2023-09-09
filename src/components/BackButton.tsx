import { useNavigate } from "react-router-dom";
import KinecticButton from "./KinecticButton";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <KinecticButton className="z-50 fixed top-4 left-4" onClick={() => navigate(-1)} duration={800}>
            <div className="bg-gray-300 rounded-full h-[70px] w-[70px] flex justify-center items-center">
                <AiOutlineArrowLeft size={50} color="white" />
            </div>
        </KinecticButton>
    )
}

export default BackButton;