[![Build Status](https://api.travis-ci.org/phiphou/was.svg)](https://travis-ci.org/phiphou/was)
[![GitHub version](https://badge.fury.io/gh/phiphou%2Fwas.svg)](https://badge.fury.io/gh/phiphou%2Fwas)
[![bitHound Dependencies](https://www.bithound.io/github/phiphou/was/badges/dependencies.svg)](https://www.bithound.io/github/phiphou/was/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/phiphou/was/badges/devDependencies.svg)](https://www.bithound.io/github/phiphou/was/master/dependencies/npm)
[![bitHound Overall Score](https://www.bithound.io/github/phiphou/was/badges/score.svg)](https://www.bithound.io/github/phiphou/was)
[![MIT license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)
![Size](https://reposs.herokuapp.com/?path=phiphou/was)

# WAS
TODO: Write a project description

## Quick Start
TODO: Describe the installation process
Run the following commands in your terminal :

```bash
$ npm install -g webpack webpack-dev-server karma-cli protractor typings typescript tslint
$ git clone https://github.com/phiphou/was.git
$ cd was
$ npm install
$ npm run start
```
Open your browser at [http://localhost:8080](http://localhost:8080) and start dev in `./src/app/app.ts`.

[comment]: # (# Table of Contents)
[comment]: # (* [File Structure](#file-structure)
[comment]: # (* [Getting Started](#getting-started)
[comment]: # (    * [Dependencies](#dependencies)
[comment]: # (    * [Installing](#installing)
[comment]: # (    * [Running the app](#running-the-app)
[comment]: # (* [Configuration](#configuration)
[comment]: # (* [TypeScript](#typescript)
[comment]: # (* [Typings](#typings)
[comment]: # (* [License](#license)

[comment]: # (## File Structure)
[comment]: # (```)
[comment]: # (angular2-webpack-starter/ )
[comment]: # ( ├──config/                    * our configuration)
[comment]: # ( |   ├──helpers.js             * helper functions for our configuration files)
[comment]: # ( |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment )
[comment]: # ( |   ├──karma.conf.js          * karma config for our unit tests )
[comment]: # ( |   ├──protractor.conf.js     * protractor config for our end-to-end tests )
[comment]: # ( │   ├──webpack.dev.js         * our development webpack config)
[comment]: # ( │   ├──webpack.prod.js        * our production webpack config)
[comment]: # ( │   └──webpack.test.js        * our testing webpack config)
[comment]: # ( │ )
[comment]: # ( ├──src/)                       * our source files that will be compiled to javascript)
[comment]: # ( |   ├──main.browser.ts)        * our entry file for our browser environment)
[comment]: # ( │   │)
[comment]: # ( |   ├──index.html             * Index.html: where we generate our index page)
[comment]: # ( │   │)
[comment]: # ( |   ├──polyfills.ts           * our polyfills file)
[comment]: # ( │   │)
[comment]: # ( |   ├──vendor.ts               * our vendor file)
[comment]: # ( │   │)
[comment]: # ( │   ├──app/                   * WebApp: folder)
[comment]: # ( │   │   ├──app.spec.ts        * a simple test of components in app.ts)
[comment]: # ( │   │   ├──app.e2e.ts         * a simple end-to-end test for /)
[comment]: # ( │   │   └──app.ts             * App.ts: a simple version of our App component components)
[comment]: # ( │   │)
[comment]: # ( │   └──assets/                * static assets are served here)
[comment]: # ( │       ├──icon/)              * our list of icons from www.favicon-generator.org)
[comment]: # ( │       ├──robots.txt         * for search engines to crawl your website)
[comment]: # ( │       └──human.txt          * for humans to know who the developers are)
[comment]: # ( │)
[comment]: # ( │)
[comment]: # ( ├──tslint.json                * typescript lint config)
[comment]: # ( ├──typedoc.json               * typescript documentation generator)
[comment]: # ( ├──tsconfig.json              * config that webpack uses for typescript)
[comment]: # ( ├──typings.json               * our typings manager)
[comment]: # ( └──package.json               * what npm uses to manage it's dependencies)
[comment]: # (```)

## Global dependencies

#### Build dependencies

| Dependency                                    | Version | Install                              |
| :-------------------------------------------- | :------ | :----------------------------------- |
| [NodeJS](http://nodejs.org)                   | 5.x.x   | [http://node.org](http://nodejs.org) |
| [npm](http://nodejs.org)                      | 3.x.x   | [http://node.org](http://nodejs.org) |
| [Typings](https://github.com/typings/typings) | 1.x.x   | `npm i typings -g`                   |
| [Webpack](http://webpack.github.io)           | 1.x.x   | `npm i webpack -g`                   |

#### Dev dependencies

| Dependency                                         | Version | Install                       |
| :------------------------------------------------- | :------ | :---------------------------- |
| [Karma CLI](https://github.com/karma-runner/karma-cli) | 1.x.x   | `npm i karma-cli -g`          |
| [Protractor](http://www.protractortest.org)        | 3.x.x   | `npm i protractor -g`         |
| [Tslint](https://palantir.github.io/tslint)        | 3.x.x   | `npm i tslint -g`             |
| [TypeScript](http://www.typescriptlang.org)        | 1.8.x   | `npm i typescript -g`         |
| [Webpack dev server](http://webpack.github.io)     | 1.x.x   | `npm i webpack-dev-server -g` |

You can also install all these dependencies in just one command :

`$ npm i -g webpack webpack-dev-server karma-cli protractor typings typescript tslint`

## Usage

#### Start developping
TODO: Describe the development process

Dive into development right now by just running:
```bash
$ npm run start
```
This will pre-build the application, start webpack's dev server and open your browser at [http://localhost:8080](http://localhost:8080).

#### Building

You can build the app and get a "ready to deploy" release by just running:
```bash
$ npm run build
```
You can also get gzipped files for serving them with `content-encoding`with :
```bash
$ npm run build-gz
```
You'll find your build in the `./dist` directory.

#### Testing

This application use unit-tests and end-to-end tests.

##### Unit-Tests

You can run unit-tests by just typing :  

```bash
$ npm run test
```
[Karma](https://karma-runner.github.io/0.13/index.html) is used as test-runner, you can configure it in the `./config/karma.conf.js` file.

[comment]: # (Tests are written for Jasmine, see `./src/app/`)

##### End-to-end

You can run e2e-tests by just typing :  

```bash
$ npm run e2e
```
[Protractor](http://www.protractortest.org) is used for end-to-end tests, you can configure it in the `./config/protractor.conf.js` file.

##### Code coverage

[Istanbul](https://github.com/gotwarlost/istanbul) is used as code coverage tool. You can configure it in the `./config/karma.conf.js` file.

It produce reports you'll find in the `./coverage` folder each time you run unit-tests.

You can also use `npm run coverage`, it will run unit-tests and automatically open your browser to the generated reports.

#### HTML5 mode
Because this app use [Angular's HTML5 mode](https://angular.io/docs/js/latest/api/common/index/LocationStrategy-class.html), url rewriting is needed.

If you're deploying it on an Apache server, you can use the provided `.htaccess` file.

If you use other hosting system, look at this file to see what url rewriting configuration is needed.   

## License
[MIT](https://opensource.org/licenses/MIT)
