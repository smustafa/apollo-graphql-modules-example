"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application = void 0;
require("reflect-metadata");
const tvshow_1 = require("./modules/tvshow");
const tvshow_crew_1 = require("./modules/tvshow_crew");
const graphql_modules_1 = require("graphql-modules");
//We will merge all our modules.
exports.application = (0, graphql_modules_1.createApplication)({
    modules: [tvshow_1.TvShowModule, tvshow_crew_1.TvShowCrewModule],
});
