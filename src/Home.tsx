import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import axios from "axios";
import Post from "./models/Post";
import PostCard from "./components/PostCard";
import ScrollButtons from "./components/ScrollButtons";

const Home = () => {
	const [latest, setLatest] = useState<Post[]>([]);

	useEffect(() => {
		loadPosts();
	}, []);

	const loadPosts = async () => {
		try {
			const res = await axios.get<Post[]>("/wp/v2/posts?per_page=12&_embed");
			setLatest(res.data);
		} catch (err) {
			console.error("Error loading posts.", err);
		}
	};

	return (
		<div>
			<TopBar />
			<div className="flex flex-wrap justify-center pb-96">
				{latest.map((v) => (
					<PostCard post={v} />
				))}
			</div>
			<ScrollButtons />
		</div>
	);
};

export default Home;
