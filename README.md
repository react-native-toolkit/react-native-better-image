# react-native-better-image

A better image component for react-native with fallback images &amp; progressive loading support

## Note

The library is ready for use but the documentation is WIP 👷🏽‍♂️

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
