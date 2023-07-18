import getTechIdByTechName from "../../services/getTechIdByTechName";
import getAllPostsByTechId from "../../services/getAllPostsByTechId";
import { ThumbBlog } from "./components/ThumbBlog.tsx/ThumbBlog";
import ThumbBlogList from "./components/ThumbBlogList";
interface BlogTechParams {
	params: {
		tech: string;
	};
}

export default async function BlogTech({ params }: BlogTechParams) {
	const { tech } = params;

	const {
		tech: { id },
	} = await getTechIdByTechName(tech);
	const data = await getAllPostsByTechId(id);
	return (
		<main className="mt-6">
			<ThumbBlogList posts={data} />
		</main>
	);
}
