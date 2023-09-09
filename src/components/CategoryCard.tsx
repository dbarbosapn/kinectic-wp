import { useNavigate } from "react-router-dom";
import Category from "../models/Category";
import KinecticButton from "./KinecticButton";

interface CategoryCardProps {
	category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
	const navigate = useNavigate();

	return (
		<KinecticButton onClick={() => navigate(`/category/${category.id}`)}>
			<div className="w-[200px] h-[100px] p-3 m-5 rounded-xl bg-gray-100 flex items-center justify-center">
				<h2 className="text-center font-bold">{category.name}</h2>
			</div>
		</KinecticButton>
	);
};

export default CategoryCard;
