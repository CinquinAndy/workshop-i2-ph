import Site from '@/components/site'
import { getContent } from '@/services/getData'

export default async function Page() {
	const data = await getContent()
	return (
		<>
			<Site data={data} />
		</>
	)
}
