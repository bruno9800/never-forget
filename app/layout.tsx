import "./globals.css";
import { Inter } from "next/font/google";
import { MenuAside, TechsQuery } from "./components/MenuAside";
import getAllTechs from "./services/getAllTechs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Never Forget",
	description: "%s | NF",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { allTeches }: TechsQuery = await getAllTechs();
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex grid-cols-2">
					<MenuAside allTeches={allTeches} />
					<div className="flex-1 sm:ml-20 px-16">{children}</div>
				</div>
			</body>
		</html>
	);
}
