
import { TvMazeAPI } from '../../providers/tvmazeapi.provider';

export const TvShowCrewResolver = {
  Query: {
    crew: (root, args, context, info) => {
      return context.injector.get(TvMazeAPI).getCrewInformationByTvShowId(args.showId);
    }
  },
};
