import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";
import { MenuAside } from "./components/MenuAside";
import getAllTechs from "./services/getAllTechs";
import { TechsQuery } from "./@types/queries";

const fugaz_One = Fugaz_One({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-fugaz",
});

const open_Sans = Open_Sans({
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
		<html lang="en" className={`${fugaz_One.variable} ${open_Sans.variable}`}>
			<body className={open_Sans.className}>
				<div className="flex grid-cols-2">
					<MenuAside allTeches={allTeches} />
					<div className="flex-1 sm:ml-20 min-h-screen">{children}</div>
				</div>
			</body>
		</html>
	);
}
