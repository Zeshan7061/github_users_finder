const searchUsersUrl = 'https://api.github.com/search/users?q='
const searchUserUrl = 'https://api.github.com/users/'

const config = {
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
	},
}

export { searchUsersUrl, searchUserUrl, config }
