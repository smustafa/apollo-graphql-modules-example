"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowCrewResolver = void 0;
const tvmazeapi_provider_1 = require("../../providers/tvmazeapi.provider");
exports.TvShowCrewResolver = {
    Query: {
        crew: (root, args, context, info) => {
            return context.injector.get(tvmazeapi_provider_1.TvMazeAPI).getCrewInformationByTvShowId(args.showId);
        }
    },
};
