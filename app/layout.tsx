import "./globals.css";
import { Fugaz_One, Ubuntu } from "next/font/google";
import { MenuAside } from "./components/MenuAside";
import getAllTechs from "./services/getAllTechs";
import { TechsQuery } from "./@types/queries";

const fugaz_One = Fugaz_One({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-fugaz",
});

const ubuntu = Ubuntu({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	variable: "--font-ubuntu",
});

export const metadata = {
	title: {
		default: "Never Forget",
		template: "%s | NF",
	},
	description: "Site desenvolvido por Bruno Matheus",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { allTeches }: TechsQuery = await getAllTechs();
	// const { allTeches }: TechsQuery = {
	// 	allTeches: [],
	// };
	return (
		<html lang="en" className={`${fugaz_One.variable} ${ubuntu.variable}`}>
			<body className={ubuntu.className}>
				<div className="flex grid-cols-2">
					<MenuAside allTeches={allTeches} />
					<div className="flex-1 sm:ml-20 px-28 mt-16">{children}</div>
				</div>
			</body>
		</html>
	);
}
