import axios from 'axios'
import Image from 'next/image'

interface IUser {
	gender: string
	name: Name
	location: Location
	email: string
	login: Login
	dob: Dob
	registered: Dob
	phone: string
	cell: string
	id: Id
	picture: Picture
	nat: string
}

interface Picture {
	large: string
	medium: string
	thumbnail: string
}

interface Id {
	name: string
	value: string
}

interface Dob {
	date: string
	age: number
}

interface Login {
	uuid: string
	username: string
	password: string
	salt: string
	md5: string
	sha1: string
	sha256: string
}

interface Location {
	street: string
	city: string
	state: string
	postcode: string
	coordinates: Coordinates
	timezone: Timezone
}

interface Timezone {
	offset: string
	description: string
}

interface Coordinates {
	latitude: string
	longitude: string
}

interface Name {
	title: string
	first: string
	last: string
}

interface Props {
	users: IUser[]
}

const Users = ({ users }: Props) => {
	return (
		<div>
			<h1 className='my-5 text-3xl text-center'>Users</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 space-x-5'>
				{users.map(user => (
					<div key={user.email} className='p-5 shadow-md m-5'>
						<h2 className='my-3 text-2xl font-bold'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
						<Image
							src={user.picture.large}
							alt={user.name.first}
							className='object-cover'
							layout='responsive'
							width={100}
							height={100}
						/>
						<p className='text-center bg-gray-400 px-3 text-white'>
							{user.email}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	// const { data, status } = await axios.get('https://randomuser.me/api/?results=10')

	// if (status >= 200 && status < 300) {
	// 	return {
	// 		props: {
	// 			users: data.results as IUser[],
	// 		},
	// 	}
	// } else {
	// 	return {
	// 		props: {
	// 			users: [],
	// 		},
	// 	}
	// }
	return {
		props: {
			users: [],
		},
	}
}

export default Users
