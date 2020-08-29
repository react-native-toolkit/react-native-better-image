import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BetterImage from 'react-native-better-image';
import { StyleSheet } from 'react-native';

const validSource = () => ({
  source: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://pyt-images.imgix.net/images/place-holder.png?bust=${Math.random()}`,
  },
});

const inValidSource = () => ({
  source: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://pyt-images.imgix.net/images/place-holder.png?bust=${Math.random()}`,
  },
});

const invalidImageOnlySource = () => ({
  source: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://pyt-images.imgix.net/images/place-holder.png?bust=${Math.random()}`,
  },
});

const style = StyleSheet.create({
  imageContainer: { flex: 1 },
});

storiesOf('Better Image', module)
  .add('Image with thumbnail', () => (
    <BetterImage
      {...validSource()}
      containerStyle={style.imageContainer}
      resizeMode="contain"
    />
  ))
  .add('Image with broken source & fallback placeholder', () => (
    <BetterImage
      {...inValidSource()}
      containerStyle={style.imageContainer}
      resizeMode="contain"
    />
  ))
  .add(
    'Image with valid thumbnail but broken source & fallback placeholder',
    () => (
      <BetterImage
        {...invalidImageOnlySource()}
        containerStyle={style.imageContainer}
        resizeMode="contain"
      />
    )
  );
