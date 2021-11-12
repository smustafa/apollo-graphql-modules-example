"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowModule = void 0;
const tvshow_schema_1 = require("./tvshow.schema");
const tvshow_resolver_1 = require("./tvshow.resolver");
const graphql_modules_1 = require("graphql-modules");
const tvmazeapi_provider_1 = require("../../providers/tvmazeapi.provider");
const common_schema_1 = require("../common-schemas/common.schema");
exports.TvShowModule = (0, graphql_modules_1.createModule)({
    id: 'tvshow-module',
    typeDefs: [common_schema_1.CommonSchemas, tvshow_schema_1.TvShow],
    resolvers: [tvshow_resolver_1.TvShowResolver],
    providers: [tvmazeapi_provider_1.TvMazeAPI]
});
