import '@/styles/globals.css'

export default async function RootLayout({ children }) {
	return (
		<html lang="fr" className={'bg-slate-50'}>
			<body
				className={'relative flex min-h-screen w-full flex-col text-slate-950'}
			>
				<main className={'h-full min-h-screen'}>{children}</main>
			</body>
		</html>
	)
}
