import Image from "next/image";
import Users from "../../lib/icons/Users";
import { GithubUser } from "../../services/MyGitHubProfile";
import GithubLogo from "../../lib/icons/GithubLogo";
import Link from "next/link";

interface BoxProps {
	user: GithubUser;
}

export default function Box({ user }: BoxProps) {
	const {
		bio,
		followers,
		following,
		html_url,
		name,
		public_repos,
		avatar_url,
	} = user;
	return (
		<div
			className="
        backgroundBox
        inline-flex justify-start gap-1
        px-1 py-4
        relative
        text-gray-950
        "
		>
			<div
				className="
        flex items-center justify-start gap-2 flex-col
      "
			>
				<Image
					alt="user profile image"
					src={avatar_url}
					width={120}
					height={120}
					className="
          rounded-lg
          "
				/>
				<div className="flex justify-between items-start w-full gap-1">
					<div className="flex flex-col items-center">
						<span className="text-base">{followers}</span>
						<span className="text-xs">seguidores</span>
					</div>
					<Users size={32} className="text-black" />
					<div className="flex flex-col items-center">
						<span className="text-base">{following}</span>
						<span className="text-xs">seguindo</span>
					</div>
				</div>
			</div>
			<div className="pt-4 flex flex-col gap-2">
				<strong className="text-2xl">{name}</strong>
				<p className="max-w-[240px] text-justify">{bio}</p>
			</div>
			<Link href={html_url}>
				<GithubLogo
					className="absolute right-4 top-4 bg-white rounded shadow-inner p-1"
					size={32}
				></GithubLogo>
			</Link>
		</div>
	);
}
