import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import styled from 'styled-components'
import { GET_POSTS } from '_graphql/post';

interface Props {}

export const Home: React.FC<Props> = () => {
	const { data, loading, error } = useQuery(GET_POSTS)


	if (error) return <h1>Error</h1>
	if (loading) return <h1>Loading</h1>

	return (
		<Div>
			<h1>Gabrr News</h1>
			{data.posts.map((post: any) => {
				return <h1>{post.title}</h1>
			})}
		</Div>
	)
}

const Div = styled.div`
	width: 90%;
	margin: auto;
`