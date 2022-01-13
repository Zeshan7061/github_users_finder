import Image from 'next/image'
import React from 'react'

interface Props {}

const Message = (props: Props) => {
	return (
		<div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
			<div className='shrink-0'>
				<Image
					className='h-12 w-12'
					src='https://img.favpng.com/7/3/8/message-logo-png-favpng-uL8Jdg0CKSBnn0TYhV4pQ0Frq.jpg'
					alt='ChitChat Logo'
					width={50}
					height={50}
				/>
			</div>
			<div>
				<div className='text-xl font-medium text-black'>ChitChat</div>
				<p className='text-gray-500'>You have a new message!</p>
			</div>
		</div>
	)
}

export default Message
