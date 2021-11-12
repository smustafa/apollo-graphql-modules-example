import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest';
import { Injectable } from 'graphql-modules';

@Injectable()
export class TvMazeAPI extends RESTDataSource {
  
  constructor() {

    //Get an error "message": "Cannot read property 'fetch' of undefined",
    //because this.httpCache is null
    super();
    this.httpCache = new HTTPCache(); 
    this.baseURL = 'https://api.tvmaze.com/';
  }

  async getByTvShowName(showName: string): Promise<string> {
    const response = await this.get('singlesearch/shows', { q: showName });
    return response;
  }


  async getCrewInformationByTvShowId(showId: number): Promise<string> {
    const response = await this.get(`shows/${showId}/crew`);
    return response;
  }

}