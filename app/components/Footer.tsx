import Link from "next/link";
import GithubLogo from "../lib/icons/GithubLogo";
import LinkedinLogo from "../lib/icons/LinkedinLogo";
import Envelope from "../lib/icons/Envelope";

export default async function Footer() {
	return (
		<footer
			className=" bg-black w-full
		"
		>
			<div className="flex items-center justify-between max-w-[1360px] mx-auto h-16">
				<strong>Site desenvolvido por Bruno Matheus</strong>
				<ul className="flex gap-4 ">
					<li className="bg-gradient-red-black p-1 rounded hover:scale-105 cursor-pointer">
						<Link
							href={"https://github.com/bruno9800"}
							prefetch={false}
							target="_blank"
						>
							<GithubLogo size={32} />
						</Link>
					</li>
					<li className="bg-gradient-red-black p-1 rounded hover:scale-105 cursor-pointer">
						<Link
							href={"https://www.linkedin.com/in/bruno-matheuss/"}
							prefetch={false}
							target="_blank"
						>
							<LinkedinLogo size={32} />
						</Link>
					</li>
					<li className="bg-gradient-red-black p-1 rounded hover:scale-105 cursor-pointer">
						<Link
							href={"mailto:bruno9800m@gmail.com"}
							prefetch={false}
							target="_blank"
						>
							<Envelope size={32} />
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
