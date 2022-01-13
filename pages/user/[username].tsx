import { useRouter } from 'next/router'
import UserItem from '@components/Github/UserItem'

interface Props {}

const User = (props: Props) => {
	const { username } = useRouter().query

	return (
		<div>
			<UserItem username={username as string} />
		</div>
	)
}

export default User
