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

### Layout Philosophy
tbd

### Getting Started

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your
machine.

**Step 2**. Clone this repository 

```shell
$ git clone -o [new app name] -b master --single-branch https://github.com/IDEO-coLAB/forkable-js-react-static MyApp
$ cd [new app name]
$ npm install                   # Install project dependencies listed in package.json
```

**Step 3**. Compile and launch your app locally by running:

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