# u-tm-logger
A basic typical logger used  in an IT Dept.

## Technologies
- React https://reactjs.org/
  - create-react-app https://create-react-app.dev/
  - npx create-react-app . (install in current dir)
- Redux https://redux.js.org/
  - app level state management
  - vs ContextAPI.. 
    - prob better for really large apps, given the way it organised, can combine reducers, etc
    - https://academind.com/tutorials/reactjs-redux-vs-context-api/
  - npm i redux react-redux redux-thunk redux-devtools-extension
- Json-server https://github.com/typicode/json-server
  - a great way to mock up a REST based API quickly
  - CRUD, filter, search,etc
  - npm i -D json-server
- Materialize CSS https://materializecss.com/
  - similar to Bootstrap, perhaps nicer looking imo
  - could use Material-UI, which is Materialize converted into React
  components, however:
    - it uses too much code, too many imports, state etc
    - NOT a fan of css in react components in General, 
      rather be closer to the metal.
    - npm i materialize-css

## Tools 
- concurrently https://www.npmjs.com/package/concurrently
  - run react and json-server 'concurrently'
  - npm i -D concurrently
- Postman https://www.postman.com/
  - goto tool to testing REST API'S
  - developed in Electron https://www.electronjs.org/
- Access API's via fetch, instead of Axios, for something diff
- moment & react-moment
  - working with dates

## Features
- Searchable Table 
  - Master/Detail
  - Detail in Modal
