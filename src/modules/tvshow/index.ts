import{ TvShow } from './tvshow.schema';
import { TvShowResolver } from './tvshow.resolver';
import { createModule } from 'graphql-modules';
import { TvMazeAPI } from '../../providers/tvmazeapi.provider';
import { CommonSchemas } from '../common-schemas/common.schema';

export const TvShowModule = createModule({
  id: 'tvshow-module',
  typeDefs: [CommonSchemas, TvShow],
  resolvers: [TvShowResolver],
  providers: [TvMazeAPI]
});