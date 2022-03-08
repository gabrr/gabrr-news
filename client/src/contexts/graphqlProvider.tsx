import { ApolloProvider } from '@apollo/client';
import { client } from 'api';

export const GraphqlProvider: React.FC = ({ children }) => {
	return (
		<ApolloProvider client={client}>
    	{children}
  	</ApolloProvider>
	)
}
