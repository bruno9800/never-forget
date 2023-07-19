import getTechIdByTechName from "../../services/getTechIdByTechName";
import getAllPostsByTechId from "../../services/getAllPostsByTechId";
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
		<div className="mt-6">
			<ThumbBlogList posts={data} />
		</div>
	);
}
