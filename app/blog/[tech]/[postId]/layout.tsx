export default async function PostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className="
      max-w-5xl
      m-auto
      "
		>
			{children}
		</div>
	);
}
