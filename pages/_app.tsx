import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomeLayout from '../components/Layouts/HomeLayout'
import { ReactQueryDevtools } from 'react-query/devtools'
import FeedbackProvider from '@components/Feedback/context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<FeedbackProvider>
				<HomeLayout>
					<Component {...pageProps} />
				</HomeLayout>
			</FeedbackProvider>
			<ReactQueryDevtools initialIsOpen={false} position='top-right' />
		</QueryClientProvider>
	)
}

export default MyApp
