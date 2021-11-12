import { gql } from 'graphql-modules';

 export const TvShowCrew = gql`

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