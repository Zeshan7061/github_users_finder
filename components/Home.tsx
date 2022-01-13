import React from 'react'

interface Props {}

const Home = (props: Props) => {
	return (
		<div className='flex flex-col space-y-5'>
			<h1 className='capitalize font-bold mt-3 text-center text-2xl md:text-5xl lg:text-6xl'>
				Welcome To Socio-Code
			</h1>
			<p className='md:w-3/5 m-auto text-lg '>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
				repellendus repudiandae ex, delectus ad magni neque et vitae nisi quo
				numquam, nemo quia, minus earum laborum soluta alias dolor vel?
			</p>
			<button className='uppercase m-auto bg-gray-600 text-white px-4 py-2 md:px-7 md:py-3 rounded-md text-xl block tracking-wider hover:bg-gray-700 transition-all hover:outline-none'>
				explore
			</button>
		</div>
	)
}

export default Home
