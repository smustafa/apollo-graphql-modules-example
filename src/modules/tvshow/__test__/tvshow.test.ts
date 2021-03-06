
import 'reflect-metadata';
import { TvShowModule } from '..';
import { gql, testkit, } from 'graphql-modules';
import { TvMazeAPI } from '../../../providers/tvmazeapi.provider';
import { application } from '../../../app';

describe("Validate TvShowModule", () => {

  it('Validate Application Setup', () => {
    const app = testkit.testModule(TvShowModule, {
      replaceExtensions: true,
    });
    expect(app.schema.getQueryType())
      .toBeDefined();
  });

  describe('Query show(name) from RestDataSource', () => {

    it('Validate TvMazeAPI.getByTvShowName(showName) to return TvShow', async () => {

      //We will mock the Module by intercepting the getByTvShowName method call.  
      //The Schema stays the same
      const app = testkit.mockApplication(application)
        .replaceModule(testkit.mockModule(TvShowModule, {
          providers: [
            {
              provide: TvMazeAPI,
              useValue: {
                getByTvShowName(showName: string) {
                  return (
                    { "id": 139, "url": "https://www.tvmaze.com/shows/139/girls", "name": `${showName}`, "type": "Scripted", "language": "English", "genres": ["Drama", "Romance"], "status": "Ended", "runtime": 30, "averageRuntime": 30, "premiered": "2012-04-15", "ended": "2017-04-16", "officialSite": "http://www.hbo.com/girls", "schedule": { "time": "22:00", "days": ["Sunday"] }, "rating": { "average": 6.6 }, "weight": 97, "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" }, "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>", "updated": 1611310521, "_links": { "self": { "href": "https://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/1079686" } } }
                  )
                },
              },
            },
          ],
        }));

      const promiseResult = testkit.execute(app, {
        document: gql`query Query($name: String!) {
          show(name: $name) {
            id
            url
            name
            type
            language
            genres
            status
            runtime
            averageRuntime
            premiered
            ended
            officialSite
            schedule {
              time
              days
            }
            rating {
              average
            }
            weight
          }
        }`,
        variableValues: { name: "girls" },
      });

      const result = (await promiseResult).data;

      //Returns a TvShow
      expect(result)
        .toHaveProperty('show');

      expect(result?.show)
        .toHaveProperty('id', 139);

      expect(result?.show)
        .toHaveProperty('name', "girls");


      //Expect Exact JSON response
      const expectedJSONResponse = {
        "id": 139,
        "url": "https://www.tvmaze.com/shows/139/girls",
        "name": "girls",
        "type": "Scripted",
        "language": "English",
        "genres": [
          "Drama",
          "Romance"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2012-04-15",
        "ended": "2017-04-16",
        "officialSite": "http://www.hbo.com/girls",
        "schedule": {
          "time": "22:00",
          "days": [
            "Sunday"
          ]
        },
        "rating": {
          "average": 6.6
        },
        "weight": 97
      };

      expect(result?.show).toEqual(expectedJSONResponse);

    });

    it('Validate TvMazeAPI.getByTvShowName(showName) await TypeError', async () => {

      const app = testkit.mockApplication(application)
        .replaceModule(testkit.mockModule(TvShowModule, {
          providers: [
            {
              provide: TvMazeAPI,
              useValue: {
                getByTvShowName(showName: string) {
                  throw TypeError();
                },
              },
            },
          ],
        }));

      const promiseResult = testkit.execute(app, {
        document: gql`query Query($name: String!) {
                show(name: $name) {
                  id,
                  name
                }
              }`,
        variableValues: { name: "girls" },
      });

      const result = (await promiseResult).data;

      expect(result)
        .toHaveProperty('show');

      expect(result?.show)
        .toBeNull();

    });

  });

});

