This is an example GraphQL API built using GraphQL Modules and it runs on apollo server.

The scenarios covered are only GET.  There is no Mutations.

In terms of Testing, only Integration Tests were written.



######### Tested Versions
$npm --version
6.14.8

$node --version
v14.15.1


######### Problems?


rm -rf node_modules
npm cache clean --force
npm install




######### To Build/Compile

ezsusmu@SE-00018098 /cygdrive/c/apollo-graphql-modules-example
$ npm run build

> apollo-graphql-modules-example@1.0.0 build C:\apollo-graphql-modules-example
> rimraf ./build && tsc



######### To start the application
ezsusmu@SE-00018098 /cygdrive/c/apollo-graphql-modules-example
$ npm run start

> apollo-graphql-modules-example@1.0.0 start C:\apollo-graphql-modules-example
> npm run build && node build/index.js


> apollo-graphql-modules-example@1.0.0 build C:\apollo-graphql-modules-example
> rimraf ./build && tsc


      Server is running!  
      Listening on default port 4000  
      Explore at https://studio.apollographql.com/sandbox  


######### To start the application in dev mode where it reloads on any development changes


ezsusmu@SE-00018098 /cygdrive/c/apollo-graphql-modules-example
$ npm run dev

> apollo-graphql-modules-example@1.0.0 dev C:\apollo-graphql-modules-example
> nodemon --exec npx ts-node src/index.ts

[nodemon] 2.0.13  
[nodemon] to restart at any time, enter `rs`  
[nodemon] watching path(s): src\**\*.ts  
[nodemon] watching extensions: ts,json  
[nodemon] starting `npx ts-node src/index.ts`  
npx: installed 14 in 4.439s  
 
      Server is running!
      Listening on default port 4000
      Explore at https://studio.apollographql.com/sandbox



######### To run all tests

ezsusmu@SE-00018098 /cygdrive/c/apollo-graphql-modules-example
$ npm test  

> apollo-graphql-modules-example@1.0.0 test C:\apollo-graphql-modules-example
> jest --config ./src/jest.config.js  
 
 PASS  src/modules/tvshow_crew/__test__/crew.test.ts (8.389 s)  
 PASS  src/modules/tvshow/__test__/tvshow.test.ts (8.361 s)  

Test Suites: 2 passed, 2 total  
Tests:       6 passed, 6 total  
Snapshots:   0 total  
Time:        10.752 s, estimated 12 s  
Ran all test suites.  
  
















      

