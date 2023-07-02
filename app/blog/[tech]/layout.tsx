import getPageBySlug from "../../services/getPageBySlug";

export const metadata = {
	title: "Blog",
};

export default async function BlogLayout({
	children,
	params: { tech },
}: {
	children: React.ReactNode;
	params: {
		tech: string;
	};
}) {
	const data = await getPageBySlug(tech);
	return (
		<main>
			{data?.page ? (
				<>
					<h1 className="text-5xl">{data.page.title}</h1>
					{children}
				</>
			) : (
				<div>
					<strong>Página não encontrada</strong>
				</div>
			)}
		</main>
	);
}
