
import "reflect-metadata";

import { ApolloServer } from 'apollo-server';
import { application } from './app';


//As we could have more than 1 schema, we need to merge them.
const schema = application.createSchemaForApollo();

const server = new ApolloServer({
    schema,
});

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on default port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});