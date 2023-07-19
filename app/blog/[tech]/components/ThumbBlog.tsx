import Image from "next/image";
import Link from "next/link";

interface PostProps {
	link: string | null;
	title: string;
	id: string;
	publisher: string | null;
	_createdAt: string;
	contentPreview: string;
	thumbnail: {
		url: string | null;
	};
	techs: {
		techName: string;
	}[];
}

export async function ThumbBlog(post: PostProps) {
	return (
		<Link
			href={`${post.techs[0].techName}/${post.id}`}
			className="
    backgroundBox
    px-2 py-4
    w-[460px]
    flex flex-col justify-between
    relative
    text-gray-950"
		>
			<div className="flex items-start gap-2">
				<Image
					src={post.thumbnail.url ?? ""}
					alt="post thumbnail"
					height={75}
					width={150}
					className="rounded p-2"
				/>
				<div className="flex flex-col justify-start mt-2">
					<strong
						className="text-3xl overflow-ellipsis line-clamp-1"
						title={post.title}
					>
						{post.title}
					</strong>
					<p className="max-w-[17rem] max-h-[5.25rem] overflow-ellipsis line-clamp-3">
						{post.contentPreview}...
					</p>
				</div>
			</div>
			<div className="w-full flex justify-between items-center px-8">
				<span>{post.publisher}</span>
				<div className="flex justify-center items-center gap-1">
					{post.techs.map((tech) => {
						return (
							<span
								key={tech.techName}
								className="bg-red-700 text-white px-2 rounded"
							>
								{tech.techName}
							</span>
						);
					})}
				</div>
			</div>
		</Link>
	);
}
