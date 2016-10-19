# Forkable JavaScript React Static

> **Forkable JavaScript React Static** is a template for creating React based stand alone websites
> (sites that are served as static html, css, and javascript). The repo doesn't include any server, it
> needs to be built and deployed to a static web server. (Though it can be connected to existing services
like Firebase)

### Features

- Modern JavaScript syntax ([ES2015](http://babeljs.io/docs/learn-es2015/)+) via [Babel](http://babeljs.io/)
- Component-based UI architecture via [React](http://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)
- Application state management via [Redux](http://redux.js.org/)
- Hot Module Replacement ([HMR](https://webpack.github.io/docs/hot-module-replacement.html)) /w [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>

### Directory Layout

```shell
.
├── /assets/                   # Shared assets including fonts and images
├── /components/               # Shared or generic UI components
│   ├── /Card/                 # Example card component 
│   └── /Link/                 # Link component to be used instead of <a>
├── /core/                     # Core framework
│   ├── history.js             # Handles client-side navigation
│   ├── router.js              # Handles routing and data fetching
│   └── store.js               # Application state manager (Redux)
├── /dist/                     # Root directory for deployable app after building
├── /docs/                     # Additional docs
├── /pages/                    # Page directories containing react components, and local css
│   ├── /article/              # Example article page
│   ├── /error/                # Example error page
│   └── /home/                 # Example home page
├── /styles/                   # Global styles
│   ├── base.css               # Colab base css properties
│   └── grid.css               # Colab grid
├── /utils/                    # Utilities and helpers
├── index.html                 # Static index onto which React mounts all components
├── main.js                    # Javascript entrypoint for app
├── package.json               # Project dependencies and npm configuration
├── robots.txt                 # Site's robots.txt
├── routes.json                # Maps app routes to page react components
├── run.js                     # Script to manage cleaning, building, starting, etc
└── webpack.config.js          # Webpack configuration
```

### Directory Layout Organization

With React, entire pages and ndividual UI elements (like a button) are components. 

When creating a component that is generic or might be shared accross the entire app, put the component JavaScript and
any component styles in a subdirectory of ```components```. 

When creating whole pages, put the top level page component JavaScript, styles specific to the page, and any components needed by the page
that aren't generic or shared with the rest of the app in a subdirectory of ```pages```.

Styles shared accross the app should go in a new file in the ```styles``` directory.

### Webpack and CSS

[Webpack](https://webpack.github.io/) is a package that bundles multiple JavaScript files and CSS files into a single ```bundle.js``` file that is then referenced by ```index.html```.
As part of bundling, webpack uses [CSS Modules](https://github.com/css-modules/css-modules) to read and merge local and global CSS files into the generated ```bundle.js```, and renames classes so that
they don't clash in the global CSS namespace. This means class names in any CSS file in the app are scoped only to that file, so disciplined prefixing of
class names (like BEM prefixing) isn't necessary.

In order for webpack to bundle a CSS file, it needs to be referenced by a JavaScript file that is used by the app. A local CSS file is typically referenced by the component JavaScript
that uses it. Global CSS files like ```/styles/base.css``` and ```/styles/grid.css``` are referenced by ```main.js```. If more global styles are needed, they should be added to a new
file in ```/styles/``` and imported in ```main.js```. See the ```home``` page JavaScript and CSS for an example of how to reference local and global css from a React component. 

### Getting Started

Here is an example for how to use this repo as the base for a new CoLab react project. Your new project's name is, of all things, `my_new_project`.

**Step 1:** Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your machine.

**Step 2:** Create a new GitHub repo. We'll assume that it, too, is named `my_new_project` (you'll use this repo as your new project's `origin` repo).

**Step 3:** Clone the `forkable-js-react-static` repo to use as `my_new_project`'s foundation.

```shell
> git clone -b master --single-branch https://github.com/IDEO-coLAB/forkable-js-react-static my_new_project
```

**Step 4:** Set `my_new_project`'s origin to point at your new GitHub project repo (see step 2) for `my_new_project`.

```shell
# Enter your my_new_project's directory
> cd my_new_project

# Set my_new_project's remote origin to be the GitHub repo you created for it.
> git remote set-url origin https://github.com/<YOUR_GITHUB_USERNAME>/my_new_project
```

**Step 5:** Install the project dependencies listed in package.json.

```shell
> npm install
```

**Step 6:** Add informtion about your project to `package.json` by running `npm init`.

```shell
> npm init
```

**Step 7:** Compile and launch your app locally by running:

```shell
$ npm run start                      
```

### How to Deploy

```shell
$ npm run build
```

This will populate /dist with all files needed for the site including HTML, JavaScript, Assets, robots.txt, etc.
Note that webpack bundles Javascript and CSS into a single bundle.js and other than index.html, all html is rendered
on the fly by React.
