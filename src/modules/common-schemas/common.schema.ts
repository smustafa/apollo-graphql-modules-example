import { gql } from 'graphql-modules';


export const CommonSchemas = gql`

  type Country {
    name: String
    code: String
    timezone: String
  }


`;