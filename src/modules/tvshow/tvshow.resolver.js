"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowResolver = void 0;
const tvmazeapi_provider_1 = require("../../providers/tvmazeapi.provider");
exports.TvShowResolver = {
    Query: {
        show: (root, args, context, info) => {
            return context.injector.get(tvmazeapi_provider_1.TvMazeAPI).getByTvShowName(args.name);
        }
    },
};
