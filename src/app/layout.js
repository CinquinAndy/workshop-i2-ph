import '@/styles/globals.css'
import '@/styles/style.css'

export default async function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	)
}
