import { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import ScrollButtons from "./components/ScrollButtons";
import TopBar from "./components/TopBar";
import config from "./config.json";
import Category from "./models/Category";
import axios from "axios";
import CategoryCard from "./components/CategoryCard";

const Categories = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = async () => {
		try {
			let url = "/wp/v2/categories?per_page=100&hide_empty=true";
			if (config.filteredCategories.length > 0) {
				url += `&include=${config.filteredCategories.join(",")}`;
			}

			const res = await axios.get<Category[]>(url);
			setCategories(res.data);
		} catch (err) {
			console.error("Error loading categories.", err);
		}
	};

	return (
		<div>
			<BackButton />
			<TopBar />
			<div className="flex flex-wrap justify-center pb-96">
				{categories.map((c) => (
					<CategoryCard category={c} />
				))}
			</div>
			<ScrollButtons />
		</div>
	);
};

export default Categories;
