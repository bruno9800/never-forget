"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "phosphor-react";

export function MenuAside() {
	const [isOpenMenu, setIsOpenMenu] = useState(true);

	function OpenMenuButton() {
		setIsOpenMenu((state) => !state);
	}

	return (
		<aside
			className={`
            fixed 
            top-0 left-0 z-1 
            w-20
            transition-transform ${
							isOpenMenu ? "sm:translate-x-0 -translate-x-full " : ""
						} 
            h-screen`}
		>
			<div
				className="
              h-full            
              overflow-y-auto 
              overflow-x-hidden
              flex flex-col justify-start items-center
              bg-gradient-to-tl from-red-800 to-slate-500 "
			>
				<Link href={"/"} className="mt-8">
					Logo
				</Link>

				<nav className="mt-16">
					<ul className="flex flex-col justify-center items-center gap-2">
						<li>
							<Link href={"#"}>React</Link>
						</li>
						<li>
							<Link href={"#"}>Typescript</Link>
						</li>
					</ul>
				</nav>
			</div>

			<button
				className="absolute top-1/2 left-20 sm:hidden"
				onClick={OpenMenuButton}
			>
				<ArrowRight
					size={16}
					weight="bold"
					className={`
          duration-300
          ${isOpenMenu ? "" : "rotate-180"}
        `}
				/>
			</button>
		</aside>
	);
}
