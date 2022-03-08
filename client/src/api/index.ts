import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_ENDPOINT } from 'config';

export const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
	connectToDevTools: true,
});