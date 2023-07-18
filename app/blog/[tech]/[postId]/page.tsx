import Image from "next/image";
import getPostById from "../../../services/getPostById";
import { StructuredText } from "react-datocms";

interface PostBlogParams {
	params: {
		postId: string;
	};
}

export default async function PostBlog({ params: { postId } }: PostBlogParams) {
	const post = await getPostById(postId);
	console.log(postId);
	return (
		<main className="mt-16">
			<h1 className="text-4xl">{post.title}</h1>
			<div className="w-full mx-auto my-8">
				<Image
					className="m-auto"
					src={post.thumbnail.url}
					alt="post image"
					height={300}
					width={400}
				/>
			</div>
			<div className="post-style mt-8">
				<StructuredText data={post.postContent.value} />
			</div>
		</main>
	);
}
