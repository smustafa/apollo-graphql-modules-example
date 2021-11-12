
import 'reflect-metadata';
import { TvShowCrewModule } from '..';
import { gql, testkit, } from 'graphql-modules';
import { TvMazeAPI } from '../../../providers/tvmazeapi.provider';
import { application } from '../../../app';

describe("Validate TvShowModule", () => {

  it('Validate Application Setup', () => {
    const app = testkit.testModule(TvShowCrewModule, {
      replaceExtensions: true,
    });
    expect(app.schema.getQueryType())
      .toBeDefined();
  });

  describe('Query crew(showId) from RestDataSource', () => {

    it('Validate TvMazeAPI.getCrewInformationByTvShowId(showId) to return TvShowCrew', async () => {

      //We will mock the Module by intercepting the getCrewInformationByTvShowId method call.  
      //The Schema stays the same
      const app = testkit.mockApplication(application)
        .replaceModule(testkit.mockModule(TvShowCrewModule, {
          providers: [
            {
              provide: TvMazeAPI,
              useValue: {
                getCrewInformationByTvShowId(showId: number) {
                  return [{ "type": "Co-Executive Producer", "person": { "id": 7776, "url": "https://www.tvmaze.com/people/7776/jesse-peretz", "name": "Jesse Peretz", "country": null, "birthday": null, "deathday": null, "gender": null, "image": null, "updated": 1532366333, "_links": { "self": { "href": "https://api.tvmaze.com/people/7776" } } } }, { "type": "Producer", "person": { "id": 7776, "url": "https://www.tvmaze.com/people/7776/jesse-peretz", "name": "Jesse Peretz", "country": null, "birthday": null, "deathday": null, "gender": null, "image": null, "updated": 1532366333, "_links": { "self": { "href": "https://api.tvmaze.com/people/7776" } } } }, { "type": "Co-Executive Producer", "person": { "id": 18834, "url": "https://www.tvmaze.com/people/18834/paul-simms", "name": "Paul Simms", "country": null, "birthday": null, "deathday": null, "gender": "Male", "image": null, "updated": 1632915973, "_links": { "self": { "href": "https://api.tvmaze.com/people/18834" } } } }, { "type": "Executive Producer", "person": { "id": 18834, "url": "https://www.tvmaze.com/people/18834/paul-simms", "name": "Paul Simms", "country": null, "birthday": null, "deathday": null, "gender": "Male", "image": null, "updated": 1632915973, "_links": { "self": { "href": "https://api.tvmaze.com/people/18834" } } } }, { "type": "Consulting Producer", "person": { "id": 24446, "url": "https://www.tvmaze.com/people/24446/dan-sterling", "name": "Dan Sterling", "country": null, "birthday": null, "deathday": null, "gender": null, "image": null, "updated": 1516062625, "_links": { "self": { "href": "https://api.tvmaze.com/people/24446" } } } }, { "type": "Creator", "person": { "id": 27410, "url": "https://www.tvmaze.com/people/27410/lena-dunham", "name": "Lena Dunham", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" }, "birthday": "1986-05-13", "deathday": null, "gender": "Female", "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/3/7597.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/3/7597.jpg" }, "updated": 1543144417, "_links": { "self": { "href": "https://api.tvmaze.com/people/27410" } } } }, { "type": "Executive Producer", "person": { "id": 27410, "url": "https://www.tvmaze.com/people/27410/lena-dunham", "name": "Lena Dunham", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" }, "birthday": "1986-05-13", "deathday": null, "gender": "Female", "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/3/7597.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/3/7597.jpg" }, "updated": 1543144417, "_links": { "self": { "href": "https://api.tvmaze.com/people/27410" } } } }]
                },
              },
            },
          ],
        }));

      const promiseResult = testkit.execute(app, {
        document: gql`query Query($showId: Int!) {
          crew(showId: $showId) {
            type
            person {
              id
              url
              name
              country {
                name
                code
                timezone
              }
              birthday
              deathday
              gender
              image {
                original
                medium
              }
              updated
              _links {
                self {
                  href
                }
              }
            }
          }
        }`,
        variableValues: { showId: 139 },
      });

      const result = (await promiseResult).data;

      //Returns a TvShowCrew[] Array
      expect(result)
        .toHaveProperty('crew');

      //Expect Exact JSON response
      const expectedJSONResponse = [
        {
          "type": "Co-Executive Producer",
          "person": {
            "id": 7776,
            "url": "https://www.tvmaze.com/people/7776/jesse-peretz",
            "name": "Jesse Peretz",
            "country": null,
            "birthday": null,
            "deathday": null,
            "gender": null,
            "image": null,
            "updated": 1532366333,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/7776"
              }
            }
          }
        },
        {
          "type": "Producer",
          "person": {
            "id": 7776,
            "url": "https://www.tvmaze.com/people/7776/jesse-peretz",
            "name": "Jesse Peretz",
            "country": null,
            "birthday": null,
            "deathday": null,
            "gender": null,
            "image": null,
            "updated": 1532366333,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/7776"
              }
            }
          }
        },
        {
          "type": "Co-Executive Producer",
          "person": {
            "id": 18834,
            "url": "https://www.tvmaze.com/people/18834/paul-simms",
            "name": "Paul Simms",
            "country": null,
            "birthday": null,
            "deathday": null,
            "gender": "Male",
            "image": null,
            "updated": 1632915973,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/18834"
              }
            }
          }
        },
        {
          "type": "Executive Producer",
          "person": {
            "id": 18834,
            "url": "https://www.tvmaze.com/people/18834/paul-simms",
            "name": "Paul Simms",
            "country": null,
            "birthday": null,
            "deathday": null,
            "gender": "Male",
            "image": null,
            "updated": 1632915973,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/18834"
              }
            }
          }
        },
        {
          "type": "Consulting Producer",
          "person": {
            "id": 24446,
            "url": "https://www.tvmaze.com/people/24446/dan-sterling",
            "name": "Dan Sterling",
            "country": null,
            "birthday": null,
            "deathday": null,
            "gender": null,
            "image": null,
            "updated": 1516062625,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/24446"
              }
            }
          }
        },
        {
          "type": "Creator",
          "person": {
            "id": 27410,
            "url": "https://www.tvmaze.com/people/27410/lena-dunham",
            "name": "Lena Dunham",
            "country": {
              "name": "United States",
              "code": "US",
              "timezone": "America/New_York"
            },
            "birthday": "1986-05-13",
            "deathday": null,
            "gender": "Female",
            "image": {
              "original": "https://static.tvmaze.com/uploads/images/original_untouched/3/7597.jpg",
              "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/3/7597.jpg"
            },
            "updated": 1543144417,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/27410"
              }
            }
          }
        },
        {
          "type": "Executive Producer",
          "person": {
            "id": 27410,
            "url": "https://www.tvmaze.com/people/27410/lena-dunham",
            "name": "Lena Dunham",
            "country": {
              "name": "United States",
              "code": "US",
              "timezone": "America/New_York"
            },
            "birthday": "1986-05-13",
            "deathday": null,
            "gender": "Female",
            "image": {
              "original": "https://static.tvmaze.com/uploads/images/original_untouched/3/7597.jpg",
              "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/3/7597.jpg"
            },
            "updated": 1543144417,
            "_links": {
              "self": {
                "href": "https://api.tvmaze.com/people/27410"
              }
            }
          }
        }
      ];

      expect(result?.crew).toEqual(expectedJSONResponse);
    });

    it('Validate TvMazeAPI.getCrewInformationByTvShowId await TypeError', async () => {

      const app = testkit.mockApplication(application)
        .replaceModule(testkit.mockModule(TvShowCrewModule, {
          providers: [
            {
              provide: TvMazeAPI,
              useValue: {
                getCrewInformationByTvShowId(showId: number) {
                  throw TypeError();
                },
              },
            },
          ],
        }));

      const promiseResult = testkit.execute(app, {
        document: gql`query Query($showId: Int!) {
          crew(showId: $showId) {
            type
            person {
              id
              url
              name
            }
          }
        }`,
        variableValues: { showId: 139 },
      });

      const result = (await promiseResult).data;

      expect(result)
        .toHaveProperty('crew');

      expect(result?.crew)
        .toBeNull();

    });

  });

});

