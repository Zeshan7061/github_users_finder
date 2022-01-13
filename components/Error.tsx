import Link from 'next/link'

interface Props {}

const Error = (props: Props) => {
	return (
		<div className='flex flex-col items-center justify-center min-h-[600px]'>
			<h1 className='text-3xl font-bold my-10 text-center text-white'>
				something went wrong...
			</h1>

			<div className='text-center'>
				<Link href='/'>
					<a className='github_btn text-white'>Go Back</a>
				</Link>
			</div>
		</div>
	)
}

export default Error
