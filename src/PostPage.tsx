import { useEffect, useState } from "react";
import Post from "./models/Post";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "./components/BackButton";
import TopBar from "./components/TopBar";
import ScrollButtons from "./components/ScrollButtons";
import parse from "html-react-parser";
import moment from "moment";
import "./post-content.css";
import QRCode from "react-qr-code";

const PostPage = () => {
	const { postId } = useParams();

	const [post, setPost] = useState<Post>();

	useEffect(() => {
		loadPost();
	}, []);

	const loadPost = async () => {
		try {
			const res = await axios.get<Post>(`/wp/v2/posts/${postId}?_embed`);
			setPost(res.data);
		} catch (err) {
			console.error("Error loading category.", err);
		}
	};

	const body = () => {
		if (post == null) return null;

		const postMedia = post._embedded["wp:featuredmedia"];
		const postImg =
			postMedia != null && postMedia.length > 0
				? postMedia[0].source_url
				: undefined;

		return (
			<div className="flex justify-center pb-96">
				<div className="container">
					<QRCode
						size={80}
						value={post.link}
						className="ml-auto mr-auto block mb-3"
					/>
					<h1 className="font-bold text-center text-[30px]">
						{parse(post.title.rendered)}
					</h1>
					<p className="text-center font-light">
						{moment(post.date).format("DD/MM/yyyy")}
					</p>
					{postImg != null ? (
						<img
							className="mt-10 mb-10 rounded-lg max-h-[400px] block ml-auto mr-auto"
							alt=""
							src={postImg}
						/>
					) : null}
					<div className="post-content">{parse(post.content.rendered)}</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<BackButton />
			<TopBar />
			{body()}
			<ScrollButtons />
		</div>
	);
};

export default PostPage;
