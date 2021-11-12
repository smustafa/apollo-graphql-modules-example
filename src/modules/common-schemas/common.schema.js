"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonSchemas = void 0;
const graphql_modules_1 = require("graphql-modules");
exports.CommonSchemas = (0, graphql_modules_1.gql) `

  type Country {
    name: String
    code: String
    timezone: String
  }


`;
