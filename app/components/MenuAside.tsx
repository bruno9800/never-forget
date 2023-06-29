"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "phosphor-react";
import NeverForgetNav from "./NeverForgetNav";
import LogoImg from "../../public/logo.svg";
import Image from "next/image";

export interface TechProps {
	id: string;
	techName: string;
	techImg: {
		url: string;
	}[];
}

export interface TechsQuery {
	allTeches: TechProps[];
}
export function MenuAside({ allTeches }: TechsQuery) {
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
              bg-gradient-side"
			>
				<Link href={"/"} className="mt-8">
					<Image alt="logo Never Forget" src={LogoImg} width={60}></Image>
				</Link>

				<nav className="mt-16">
					<NeverForgetNav allTeches={allTeches} />
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
