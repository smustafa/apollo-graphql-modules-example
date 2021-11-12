"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowCrew = void 0;
const graphql_modules_1 = require("graphql-modules");
exports.TvShowCrew = (0, graphql_modules_1.gql) `

  extend type Query {
    crew(showId: Int!): [TvShowCrew]
  }  

  type TvShowCrew {
    type: String
    person: Person
  }

  ## Person is using Country type which is defined in CommonSchemas
  type Person {
    id: Int!
    url: String
    name: String!
    country: Country
    birthday: String
    deathday: String
    gender: String
    image: Image
    updated: Float
    _links: Link
  }

  type Link {
    self: Self
  }

  type Self {
    href: String
  }

  type Image{
      medium: String
      original: String
  }


`;
