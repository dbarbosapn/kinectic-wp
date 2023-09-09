import { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import ScrollButtons from "./components/ScrollButtons";
import TopBar from "./components/TopBar";
import Post from "./models/Post";
import PostCard from "./components/PostCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "./models/Category";

const CategoryPage = () => {
	const { categoryId } = useParams();

	const [posts, setPosts] = useState<Post[]>([]);
	const [category, setCategory] = useState<Category>();

	useEffect(() => {
		loadPosts();
		loadCategory();
	}, []);

	const loadPosts = async () => {
		try {
			const res = await axios.get<Post[]>(
				`/wp/v2/posts?categories=${categoryId}&per_page=100&_embed`
			);
			setPosts(res.data);
		} catch (err) {
			console.error("Error loading posts.", err);
		}
	};

	const loadCategory = async () => {
		try {
			const res = await axios.get<Category>(`/wp/v2/categories/${categoryId}`);
			setCategory(res.data);
		} catch (err) {
			console.error("Error loading category.", err);
		}
	};

	return (
		<div>
			<BackButton />
			<TopBar />
			{category == null ? null : (
				<h1 className="text-center font-bold text-[60px] text-blue-300">
					{category.name}
				</h1>
			)}
			<div className="flex flex-wrap justify-center pb-96">
				{posts.map((p) => (
					<PostCard post={p} />
				))}
			</div>
			<ScrollButtons />
		</div>
	);
};

export default CategoryPage;
