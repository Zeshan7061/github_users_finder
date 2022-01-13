import React from 'react'
import Footer from '@components/Footer'
import Header from '@components/Github/Header'

interface Props {
	children: React.ReactElement
}

const HomeLayout = ({ children }: Props) => {
	return (
		<div className='m-auto min-w-min bg-gradient-to-b from-gray-400 to-gray-500 h-auto min-h-screen'>
			<main className='min-h-[600px] px-2 md:lg:mx-auto md:lg:w-1/2'>
				<Header />
				{children}
				<Footer />
			</main>
		</div>
	)
}

export default HomeLayout
