import dynamic from 'next/dynamic'

// Dynamically import the Site component with SSR disabled
const DynamicSite = dynamic(() => import('@/components/site'), {
	ssr: false,
	loading: () => <p>Loading...</p>, // Optional loading component
})

export default function Page() {
	return (
		<>
			<DynamicSite />
		</>
	)
}
