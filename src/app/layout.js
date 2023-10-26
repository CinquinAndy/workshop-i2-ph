import '@/styles/globals.css'
import '@/styles/style.css'

// either Static metadata
export const metadata = {
	title: 'PlantHub - For the love of plants',
	description: 'PlantHub - For the love of plants',
	metadataBase: new URL(`https://plante-hub.beta.andy-cinquin.fr`),
	robots: {
		index: false,
		follow: false,
		nocache: true,
		googleBot: {
			index: false,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default async function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	)
}
