import Post from "../models/Post";
import parse from "html-react-parser";
import KinecticButton from "./KinecticButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	const navigate = useNavigate();

	const postMedia = post._embedded["wp:featuredmedia"];
	const postImg =
		postMedia != null && postMedia.length > 0
			? postMedia[0].source_url
			: undefined;

	return (
		<KinecticButton onClick={() => navigate(`/post/${post.id}`)}>
			<div className="w-[500px] m-5 rounded-lg bg-gray-100">
				{postImg != null ? (
					<img
						draggable={false}
						className="rounded-t-lg object-cover w-full h-[200px]"
						alt=""
						src={postImg}
					/>
				) : null}
				<div className="p-3">
					<h2 className="font-bold text-lg">{parse(post.title.rendered)}</h2>
					<p className="font-light">{moment(post.date).format("DD/MM/yyyy")}</p>
					<p className="mt-2">{parse(post.excerpt.rendered)}</p>
				</div>
			</div>
		</KinecticButton>
	);
};

export default PostCard;
