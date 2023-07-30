# <div style="text-align: center;">vue-lib-template</div>

<!-- <p align="center">
  <img src="/static/icon.png"  width="256" height="256" alt="nuxt-firebase logo">
</p> -->

## Description

Monorepo project template for developing vue3.x compatible libraries.<br>
Pre-setup project for behavior validation and documentation.

## Features

:heavy_check_mark: Library development based on .vue files<br>
:heavy_check_mark: Pre-built build configuration<br>
:heavy_check_mark: Publish flow to pre-built npm (by release-it)<br>
:heavy_check_mark: Prebuilt eslint, prettier, stylint configurations<br>
:heavy_check_mark: Pre-built verification environment<br>
:heavy_check_mark: Pre-built documentation projects<br>
:construction: Revamped document page UI
:calendar: Construction of nuxt3 verification environment<br>

> :heavy_check_mark: = Available<br>
> :construction: = Work in progress<br>
> :calendar: = Planned<br>

## Dependencies / DevDependencies

### packages/lib

| package name                   | version  | remarks                                                                                                                    |
| ------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| vue                            | ^3.3.4   |                                                                                                                            |
| sass                           | ^1.62.1  |                                                                                                                            |
| typescript                     | ^5.0.2   |                                                                                                                            |
| vite                           | ^4.3.8   |                                                                                                                            |
| rollup-plugin-typescript2      | ^0.34.1  |                                                                                                                            |
| vite-plugin-css-injected-by-js | ^3.1.1   |                                                                                                                            |
| eslint                         | ^8.41.0  | https://github.com/takuma-ru/vue-lib-template/blob/3053251a8207f6cfa9ca782e9ef8ec0be01cd8f9/packages/lib/.eslintrc.yml     |
| prettier                       | ^3.0.0   | https://github.com/takuma-ru/vue-lib-template/blob/3053251a8207f6cfa9ca782e9ef8ec0be01cd8f9/packages/lib/.prettierrc.yml   |
| stylelint                      | ^15.10.1 | https://github.com/takuma-ru/vue-lib-template/blob/3053251a8207f6cfa9ca782e9ef8ec0be01cd8f9/packages/lib/.stylelintrc.json |

### examples/demo

| package name | version | remarks |
| ------------ | ------- | ------- |
| vue          | ^3.2.47 |         |
| typescript   | ^5.0.2  |         |
| vite         | ^4.3.8  |         |
|              |         |         |

### docs

| package name                | version | remarks |
| --------------------------- | ------- | ------- |
| nuxt                        | ^3.5.1  |         |
| @takuma-ru/vue-library-docs | ^1.3.0  |         |

## Installation

#### 0. Click to "Use this template"

[![use-this-temp-button](https://user-images.githubusercontent.com/49429291/202691047-cdf8ce37-1be6-47fa-898c-f143b2773aca.png)](https://github.com/takuma-ru/vue-lib-template/generate)

### 1. Install Volta

We use volta to manage node and yarn versioning.

#### 2. Install

```bash
yarn
```

## Development

#### 1. Build Library

```bash
yarn build:lib
```

#### 2. Operation check

You can run the vite+vue3 project created in examples/demo to check the operation of the built package.

```bash
yarn dev:demo
```

## How to Release package

#### 1. Set Github Secret

1. Create a new npm access token. [Document](https://docs.npmjs.com/creating-and-viewing-access-tokens)
2. Set the token to the `NPM_TOKEN` secret in the repository settings. [Document](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)
3. Set the token to the `USER_EMAIL` secret in the repository settings. This token is used to set the author of the commit.

#### 3. Push

Without thinking, check out the branch and get to work.<br>
(Don't work on the main branch!)

#### 4. Create Pull Request

Once the implementation is complete, create a pull request.

#### 5. Merge Pull Request

Once the review is complete, merge.<br>
Merge comments should be changed manually.<br>

> - major update: 🚀 bump up version major
> - minor update: 🚀 bump up version minor
> - patch update: 🚀 bump up version patch

Once merged, `release-it` CI is automatically executed.<br>
a few moments later....<br>
The package should be released to npm!<br>

## Deploy Service

none

## ScreenShots

none

---

<!-- I would appreciate it if you would not delete this statement: e743c6a8-807c-4b89-8020-a8ea9c8e033a -->

**This template was created by [@takuma-ru](https://github.com/takuma-ru)**
