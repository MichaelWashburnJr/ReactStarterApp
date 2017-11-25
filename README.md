# ReactStarterApp

This is a Starter app that I forked from [react-slingshot](https://github.com/coryhouse/react-slingshot) for my
specific needs.

This has a nice set of npm scripts and comes with the following things:

- React
- Redux
- Webpack
- Jest
- SCSS
- Babel (so you can use ES6)
- Bootstrap
- Hot reload

## Get Started

### Setup

1. `npm install`
2. `npm run start`

### Layout
This layout is how I like to build React apps. We have a set of routes in our `App.js` file, which correspond
to different pages. A "Page" in my book does the majority of the data initializing, but I like to only use 1 component in each page. So for the `HomePage`, I would also have a `Home` component. This keeps the presentation separate from any data manipulation. 

This starter app uses Redux as well. So if you need to make API requests, you would do that in the `actions/` folder. The actions make requests and put their response data in a dispatch, which is picked up by the reducers in the `reducers/` folder. The reducers apply state changes to the application state, which can then be mapped to values in the containers.

In this example code, the `HomePage` invokes an action which makes an API request. That API request is made and upon it's response, the data is put in an action and dispatched. The reducer sees this change, and saves the data to the state. The `HomePage` then gets this data by mapping it's state to it's props. Thus, the cycle is complete.

## Linting and Testing

You can execute the linter manually by running `npm run lint` or `npm run lint:watch`.

Similarly, you can run tests manually with `npm run test` or `npm run test:watch`.
