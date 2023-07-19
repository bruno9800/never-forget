import { AllPostsByTechIdType } from "../../../services/getAllPostsByTechId";
import { ThumbBlog } from "./ThumbBlog";

export default async function ThumbBlogList({
	posts: { allPosts },
}: {
	posts: AllPostsByTechIdType;
}) {
	return (
		<div className="flex justify-start align-start gap-6 flex-wrap">
			{allPosts.map((post) => (
				<ThumbBlog {...post} />
			))}
		</div>
	);
}
