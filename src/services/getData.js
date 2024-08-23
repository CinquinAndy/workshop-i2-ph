/**
 * Get all content-website from API
 * /api/content-website?populate=deep
 * @private
 * @returns {Promise<any>}
 */
export async function getContent() {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/videos?select=*`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					apiKey: process.env.NEXT_PUBLIC_API_TOKEN,
				},
			}
		)

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`)
		}

		return await res.json()
	} catch (error) {
		console.error('Error fetching content:', error)
		throw new Error('Failed to fetch data')
	}
}
