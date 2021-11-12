"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowCrewModule = void 0;
const graphql_modules_1 = require("graphql-modules");
const crew_resolver_1 = require("./crew.resolver");
const tvmazeapi_provider_1 = require("../../providers/tvmazeapi.provider");
const crew_schema_1 = require("./crew.schema");
const common_schema_1 = require("../common-schemas/common.schema");
exports.TvShowCrewModule = (0, graphql_modules_1.createModule)({
    id: 'crew-module',
    typeDefs: [common_schema_1.CommonSchemas, crew_schema_1.TvShowCrew],
    resolvers: [crew_resolver_1.TvShowCrewResolver],
    providers: [tvmazeapi_provider_1.TvMazeAPI]
});
