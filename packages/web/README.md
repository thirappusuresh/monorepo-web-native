#### Description
This is the home of the new medlife web app.

#### How to run?
We are using [`Yarn`](https://yarnpkg.com/) to handle our dependencies. Please install it from [here](https://yarnpkg.com/en/docs/install)

While there is no hard check on using `npm install`, the generated `package-lock.json` must not be commited and is added to `.gitignore`.

##### Development
1. `yarn install`
2. `yarn start`

This will begin the build for `scss`, perform some pre-build instrumentation using `preBuildSteps.js` & finally start server.

##### Production
`yarn production-build`

This will install production dependencies & generate a `.next` folder inside root of the project. 

This directory can be uploaded to some node backend and run via the expressjs server in production mode. 

Nextjs will ensure that the static assets are picked up from `.next` directory.

#### Starting Production Server (in production machines)
`yarn start-prod`

This will start a pm2 server for production

#### Starting Production Server (in dev machines for testing)
`yarn start-prod-in-dev-machine`

This will start a regular expressjs server for testing production bundle

