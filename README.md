<div align="center">

<img
  src="https://github.com/react-native-toolkit/react-native-better-image/raw/master/assets/logo.png"
  alt="better-image-logo"
  height="150px"
  width="150px"
/>

# React Native Better Image

A better image component for react-native with fallback images & progressive loading support

Built on top of `View`, `Image` & `Animated` components

[![Build Status][build-badge]][build]
[![Maintainability][maintainability-badge]][maintainability-url]
[![Test Coverage][coverage-badge]][coverage-url]

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Bundlephobia][bundle-phobia-badge]][bundle-phobia]

[![Star on GitHub][github-star-badge]][github-star]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Twitter Follow][twitter-badge]][twitter]

[![Storybook][storybook-badge]][website] [![Chromatic][chromatic-badge]][chromatic]

### Compatible with Expo & React Native Web 🚀

### PRs Welcome 👍✨

</div>

- 📦 [Installation](#installation)
- ℹ️ [Usage](#usage)
- 📃 [Documentation][website]
- ✨ [Motivation](#motivation)
- 📱 [Example App][expo]

## Installation

```sh
yarn add react-native-better-image

#or

npm install react-native-better-image
```

## Usage

```js
import BetterImage from 'react-native-better-image';

// ...

<BetterImage
  containerStyle={style}
  source={{
    uri: // image uri
  }}
  thumbnailSource={{
    uri: // thumbnail uri - will be displayed till image is loaded
  }}
  fallbackSource={{
    uri: // fallback image if original image fails to load
  }}
  // ...all other react-native image props
/>
```

## Motivation

React Native only includes a basic image component. I used to try solutions like [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) but none actually worked for the two of my most important issues:

- Lack of a fallback placeholder
- Progressive image loading (especially for banners & cover images)

This library solves two of these important issues by providing a fallbackSource & a thumbnailSource prop. If you need more features, feel free to raise an issue or send a PR ✨ I'd be happy to help 👍

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

[build]: https://github.com/react-native-toolkit/react-native-better-image/actions
[build-badge]: https://github.com/react-native-toolkit/react-native-better-image/workflows/build/badge.svg
[coverage-badge]: https://api.codeclimate.com/v1/badges/acf5243d130542dde7c9/test_coverage
[coverage-url]: https://codeclimate.com/github/react-native-toolkit/react-native-better-image/test_coverage
[maintainability-badge]: https://api.codeclimate.com/v1/badges/acf5243d130542dde7c9/maintainability
[maintainability-url]: https://codeclimate.com/github/react-native-toolkit/react-native-better-image/maintainability
[bundle-phobia-badge]: https://badgen.net/bundlephobia/minzip/react-native-better-image
[bundle-phobia]: https://bundlephobia.com/result?p=react-native-better-image
[downloads-badge]: https://img.shields.io/npm/dm/react-native-better-image.svg
[npmtrends]: http://www.npmtrends.com/react-native-better-image
[package]: https://www.npmjs.com/package/react-native-better-image
[version-badge]: https://img.shields.io/npm/v/react-native-better-image.svg
[twitter]: https://twitter.com/dani_akash_
[twitter-badge]: https://img.shields.io/twitter/follow/dani_akash_?style=social
[github-watch-badge]: https://img.shields.io/github/watchers/react-native-toolkit/react-native-better-image.svg?style=social
[github-watch]: https://github.com/react-native-toolkit/react-native-better-image/watchers
[github-star-badge]: https://img.shields.io/github/stars/react-native-toolkit/react-native-better-image.svg?style=social
[github-star]: https://github.com/react-native-toolkit/react-native-better-image/stargazers
[storybook-badge]: https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg
[website]: https://betterimage.netlify.app
[chromatic-badge]: https://img.shields.io/badge/-chromatic-%23fc521f
[chromatic]: https://chromatic.com/library?appId=5f5078c6fe7d0c0022c82f06&branch=master
[expo]: https://expo.io/@daniakash/react-native-better-image-example
