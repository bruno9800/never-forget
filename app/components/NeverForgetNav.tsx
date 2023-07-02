import Image from "next/image";
import Link from "next/link";
import { TechProps } from "../@types/queries";

interface NeverForgetProps {
	allTeches: TechProps[];
}

export default function NeverForgetNav({ allTeches }: NeverForgetProps) {
	return (
		<ul
			className="
      flex items-center justify-center gap-2 flex-col
      w-14 
    "
		>
			{allTeches.map((tech) => (
				<li
					key={tech.id}
					className="
					bg-black
					p-2
					rounded-xl
					flex items-center justify-center
				"
				>
					<Link href={`/blog/${tech.techName}`} className="p-1 hover:p-[0.9px]">
						<Image
							src={tech.techImg[0].url}
							alt={`logo ${tech.techName}`}
							width={60}
							height={60}
							className="fill-red-700"
						/>
					</Link>
				</li>
			))}
		</ul>
	);
}
