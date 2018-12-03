#### Technology Stack
This app is powered by [`ReactJS`](https://reactjs.org/) & [`Redux`](https://redux.js.org/), server side rendered using [`Nextjs`](https://nextjs.org/). 

Following is the highlevel design of our FE architecture.


![Universal App Architecture](https://res.cloudinary.com/dlyrm3x28/image/upload/v1537765502/ssr-app-architecture.jpg)

#### Common Patterns

##### JavaScript Version
Bleeding edge: ES6 / ES7

##### React Components
Use a functional component unless you have to use `state`

##### Redux
We are following a variant of [DUCKS](https://github.com/erikras/ducks-modular-redux) pattern.

Following is an example of a `DUCKS` file:

```
import keymirror from 'keymirror';
import { createAction } from 'redux-actions';

export const LoginDucksActionTypes = keymirror({
    LOGIN_DUCKS_SYNC_MOBILE_NUMBER: null,
});

export const initialState = {
    data: {
        mobileNumber: '',
    },
    ui: {},
};

export const syncMobileNumberField = createAction(LoginDucksActionTypes.LOGIN_DUCKS_SYNC_MOBILE_NUMBER);

export default function reducer(reducerState, action = {}) {
    const state = reducerState || initialState;
    const { type, payload } = action;

    switch (type) {
        case LoginDucksActionTypes.LOGIN_DUCKS_SYNC_MOBILE_NUMBER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    mobileNumber: payload,
                },
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
}

```
As we see, a `DUCKS` file includes 
[`ActionTypes`](https://redux.js.org/basics/actions), 
[`ActionCreators`](https://redux.js.org/basics/actions), and a 
[`Reducer`](https://redux.js.org/basics/reducers) in one file. Only requirement is that a module must `default export` a `reducer` function.

Benefits of this pattern: our app becomes a collection of `DUCKS` modules, each solving a business problem on it's own.

Have a sidebar filter widget to implement? Maybe add a `SidebarDucks`.

###### Shape of initial state
State inside every `DUCKS` should be of the shape:
```
{
    data: {},
    ui: {}
}
```
Here, `data` refers to raw data, like may be, `Product Details` or `List of Products`. Make sure it is normalized.
And `ui` refers to the UI specific data like, `show / hide` of some UI element, `enable \ disable` of some input.


###### Testing DUCKS files

Following is how one can go ahead and add tests for their `DUCKS`:

```
import reducer, {
    initialState,
} from '../LoginDucks';

it('should return default state', () => {
    expect(reducer()).toEqual(initialState);
});
```
This is a very contrived example, but it makes it's point. Notice that it imports `initialState` from `LoginDucks`.

##### Coding best practices

A combination of [`eslint`](https://eslint.org/), [`editorconfig`](https://editorconfig.org/) & [`git pre commit hook`](https://git-scm.com/docs/githooks#_pre_commit) is used to enforce code styles

#### Pre Build Steps
As a convention, we are using `.env` files loaded via [`dotenv`](https://github.com/motdotla/dotenv) to host our environment specific configurations.

For example: Like which server to use for backend microservices or whether or not we want to run our `BundleAnalyzerPlugin`.

When you run the app for the first time, it is expected for you to not have a `.env` in your workspace. `.env` files are in `.gitignore` and are machine specific.

So as a pre-build step, we automatically check if you have a `.env` file and if not, we simply create it with some default config.

Make sure you update it to you liking / need.

Next, we read your `.env` file and replace any occurance of it in your codebase via `transform-define` plugin.

TODO: add examples of usage in this section.

#### Production build optimizations

When you build for production, `nextjs` with `webpack` handles route-based code splitting & minification + uglification + tree-shaking of your bundles.

As for CSS, we use `css-purify-webpack-loader` to remove unused CSS from bundles.

#### Using env & client side variables in React Components

Because this is a SSR app, all code we write gets executed in server side. While this is not a problem on its own, however some globals like `window` || `document` are only available in client side.

The `componentDidMount` lifecycle hook runs only in client side. Maybe this is a good chance to setup window level event listeners if required.

##### env variables

All variables declared in `.env` file is available in code namespaced with `medlifeConst`.

For example:
this is the content of `.env` file

```
PORT=3000
```

Then the same can be used in React components as `medlifeConst.PORT`
At build time, this is replaced with the actual value so as to avoid polluting the scope.


```
componentDidMount() {
    console.log('Home.componentDidMount runs only in client');
    console.log('medlifeConst.ANALYZE', medlifeConst.ANALYZE);

    const { features, setFeatures } = this.props;
    setFeatures({ features });
}
```