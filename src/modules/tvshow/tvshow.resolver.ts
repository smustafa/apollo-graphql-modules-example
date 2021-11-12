
import { TvMazeAPI } from '../../providers/tvmazeapi.provider';


export const TvShowResolver = {
  Query: {
    show: (root, args, context, info) => {
      return context.injector.get(TvMazeAPI).getByTvShowName(args.name);
    }
  },
};
