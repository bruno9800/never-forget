import Box from "./components/styled/Box";
import myGitHubProfile from "./services/MyGitHubProfile";
import defaultUserImg from "@/public/default-user.webp";

export default async function Home() {
	const [user] = await Promise.all([myGitHubProfile()]);

	return (
		<main className="mt-4">
			<h1 className="text-5xl font-bold">
				Bem vindo ao{" "}
				<span className="bg-gradient-red-black px-2 rounded-lg">
					Never Forget
				</span>
			</h1>

			<div className="mt-8 p-2 flex flex-col gap-4 text-justify">
				<h2 className="text-xl ">Porque esse site foi desenvolvido?</h2>
				<p className="text-lg max-w-4xl indent-4 text-justify">
					{" "}
					Estou desenvolvendo este site com o intuito de aprofundar meus
					conhecimentos em desenvolvimento web e registrar todas as práticas que
					me levaram a aprender algo novo sobre uma determinada tecnologia.
				</p>

				<p className="text-lg max-w-4xl indent-4">
					Ao documentar minhas práticas e experiências, estou criando um recurso
					valioso tanto para mim quanto para outras pessoas interessadas em
					aprender sobre desenvolvimento web. Espero que, ao compartilhar lições
					aprendidas, dicas e truques, possa contribuir para a comunidade e
					facilitar a jornada de outros desenvolvedores em busca de conhecimento
					nesta área.
				</p>
			</div>

			<div className="mt-8">
				<div className="flex items-center justify-evenly">
					<p className="text-4xl">Esse site foi desenvolvido por:</p>
					<Box
						user={
							user ?? {
								avatar_url: defaultUserImg,
								bio: "Dados locais",
								followers: 0,
								following: 0,
								html_url: "",
								name: "Bruno Matheus",
								public_repos: 0,
							}
						}
					></Box>
				</div>
			</div>
		</main>
	);
}
