"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShow = void 0;
const graphql_modules_1 = require("graphql-modules");
exports.TvShow = (0, graphql_modules_1.gql) `

  type Query {
    show(name: String!): TvShow
  }  

  type TvShow {
    id: Int
    url: String!
    name: String!
    type: String
    language: String
    genres: [String]
    status: String
    runtime: Int
    averageRuntime: Int
    premiered: String
    ended: String
    officialSite: String
    schedule: Schedule
    rating: Rating
    weight: Int

  }

  type Schedule{
    time: String
    days: [String]
  }
  
  type Rating {
    average: Float
  }

  type Network {
    id: ID!
    name: String
    country: Country
  }
`;
