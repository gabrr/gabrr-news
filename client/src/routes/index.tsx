import { Home } from 'pages'

const routes = [
	{ title: "Home", path: '/', Component: Home, isProtected: true, isExact: true }
]

export const Routes: React.FC = () => {
	return (
		<>
			{routes.map(({ Component }, i) => <Component key={i+'route'} />)}
		</>
	)
}