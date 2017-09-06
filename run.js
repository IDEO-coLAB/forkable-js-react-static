/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable no-console, global-require */

const del = require('del')
const webpack = require('webpack')

// TODO: Update configuration settings
// const config = {
//   title: 'React Static Boilerplate',        // Your website title
//   url: 'https://rsb.kriasoft.com',          // Your website URL
//   project: 'react-static-boilerplate',      // Firebase project. See README.md -> How to Deploy
//   trackingID: 'UA-XXXXX-Y',                 // Google Analytics Site's ID
// }

const tasks = new Map() // The collection of automation tasks ('clean', 'build', 'publish', etc.)

function run(task) {
  const start = new Date()
  console.log(`Starting '${task}'...`)
  return Promise.resolve().then(() => tasks.get(task)()).then(() => {
    console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`)
  }, err => console.error(err.stack))
}

//
// Clean up the output directory
// -----------------------------------------------------------------------------
tasks.set('clean', () => del(['dist/*', '!dist/.git'], { dot: true }))

//
// Bundle JavaScript, CSS and image files with Webpack
// -----------------------------------------------------------------------------
tasks.set('bundle', () => {
  const webpackConfig = require('./webpack.config')

  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        reject(err)
      } else {
        console.log(stats.toString(webpackConfig.stats))
        resolve()
      }
    })
  })
})

//
// Build website into a distributable format
// -----------------------------------------------------------------------------
tasks.set('build', () => {
  global.DEBUG = process.argv.includes('--debug') || false
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('bundle'))
})