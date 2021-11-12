"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const app_1 = require("./app");
//As we could have more than 1 schema, we need to merge them.
const schema = app_1.application.createSchemaForApollo();
const server = new apollo_server_1.ApolloServer({
    schema,
});
server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on default port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});
