
import "reflect-metadata";

import { TvShowModule } from './modules/tvshow';
import { TvShowCrewModule } from "./modules/tvshow_crew";
import { createApplication } from 'graphql-modules';

//We will merge all our modules.
export const application = createApplication({
  modules: [TvShowModule, TvShowCrewModule],
});
