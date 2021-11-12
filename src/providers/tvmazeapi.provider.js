"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvMazeAPI = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const graphql_modules_1 = require("graphql-modules");
let TvMazeAPI = class TvMazeAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        //Get an error "message": "Cannot read property 'fetch' of undefined",
        //because this.httpCache is null
        super();
        this.httpCache = new apollo_datasource_rest_1.HTTPCache();
        this.baseURL = 'https://api.tvmaze.com/';
    }
    async getByTvShowName(showName) {
        const response = await this.get('singlesearch/shows', { q: showName });
        return response;
    }
    async getCrewInformationByTvShowId(showId) {
        const response = await this.get(`shows/${showId}/crew`);
        return response;
    }
};
TvMazeAPI = __decorate([
    (0, graphql_modules_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TvMazeAPI);
exports.TvMazeAPI = TvMazeAPI;
