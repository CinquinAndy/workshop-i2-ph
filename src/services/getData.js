/**
 * Get all content-website from API
 * /api/content-website?populate=deep
 * @private
 * @returns {Promise<any>}
 */
export async function getContent() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/videos?select=*`,
		{
			method: 'GET',
			headers: {
				// 	token
				'Content-Type': 'application/json',
				Accept: 'application/json',
				apiKey: `${process.env.NEXT_PUBLIC_API_TOKEN}`,
			},
		}
	)

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
