import Footer from "../../components/Footer";
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
		<main className="flex flex-col justify-between items-start gap-32 min-h-screen">
			<div className="px-28 w-full">
				{data?.page ? (
					<div className="mt-16">
						<h1 className="text-5xl">{data.page.title}</h1>
						{children}
					</div>
				) : (
					<strong className="mt-16">Página não encontrada</strong>
				)}
			</div>

			<Footer />
		</main>
	);
}
