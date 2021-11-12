import { gql } from 'graphql-modules';


export const TvShow = gql`

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