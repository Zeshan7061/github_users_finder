import React from 'react'

interface Props {}

const Table = (props: Props) => {
	return (
		<div className='mt-12 overflow-hidden rounded-lg'>
			<table className='w-full cursor-pointer text-white'>
				<thead className='bg-teal-500 p-5'>
					<th className='p-5'>S.NO</th>
					<th className='p-5'>NAME</th>
					<th className='p-5'>LANGUAGE</th>
					<th className='p-5'>MARK</th>
				</thead>

				<tbody>
					<tr className='bg-teal-300 hover:bg-white hover:text-black hover:scale-105 duration-200'>
						<td className='p-5 text-center'>1</td>
						<td className='p-5 text-center'>JOHN DOE</td>
						<td className='p-5 text-center'>PYTHON</td>
						<td className='p-5 text-center'>50</td>
					</tr>
					<tr className='bg-teal-400 hover:scale-105'>
						<td className='p-5 text-center'>1</td>
						<td className='p-5 text-center'>JOHN DOE</td>
						<td className='p-5 text-center'>PYTHON</td>
						<td className='p-5 text-center'>50</td>
					</tr>
					<tr className='bg-teal-500 hover:scale-105'>
						<td className='p-5 text-center'>1</td>
						<td className='p-5 text-center'>JOHN DOE</td>
						<td className='p-5 text-center'>PYTHON</td>
						<td className='p-5 text-center'>50</td>
					</tr>
					<tr className='bg-teal-600 hover:scale-105'>
						<td className='p-5 text-center'>1</td>
						<td className='p-5 text-center'>JOHN DOE</td>
						<td className='p-5 text-center'>PYTHON</td>
						<td className='p-5 text-center'>50</td>
					</tr>
					<tr className='bg-teal-700 hover:scale-105'>
						<td className='p-5 text-center'>1</td>
						<td className='p-5 text-center'>JOHN DOE</td>
						<td className='p-5 text-center'>PYTHON</td>
						<td className='p-5 text-center'>50</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table
