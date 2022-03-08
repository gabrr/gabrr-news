import { ApolloServer } from 'apollo-server';
import startServer, { serverConfig } from 'setup/startSetup';

const server = new ApolloServer(serverConfig);

startServer(server)