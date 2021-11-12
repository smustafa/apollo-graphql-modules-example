
import { createModule } from 'graphql-modules';
import { TvShowCrewResolver } from './crew.resolver';
import { TvMazeAPI } from '../../providers/tvmazeapi.provider';
import { TvShowCrew } from './crew.schema';
import { CommonSchemas } from '../common-schemas/common.schema';

export const TvShowCrewModule = createModule({
  id: 'crew-module',
  typeDefs: [CommonSchemas, TvShowCrew],
  resolvers: [TvShowCrewResolver],
  providers: [TvMazeAPI]
});
