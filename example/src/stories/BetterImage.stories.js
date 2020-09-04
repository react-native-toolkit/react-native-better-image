import React from 'react';
import BetterImage from 'react-native-better-image';

export default {
  title: 'Example/BetterImage',
  component: BetterImage,
  argTypes: {},
};

const Template = (args) => <BetterImage {...args} />;

const validSource = () => ({
  source: {
    uri: `https://unsplash.com/photos/yNvVnPcurD8/download?force=true&w=2400&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://unsplash.com/photos/yNvVnPcurD8/download?force=true&w=24&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://unsplash.com/a/img/empty-states/photos.png?bust=${Math.random()}`,
  },
});
export const ValidImage = Template.bind({});
ValidImage.args = {
  ...validSource(),
  viewStyle: { height: 400, width: 400 },
  resizeMode: 'contain',
};

const inValidSource = () => ({
  source: {
    uri: `https://unsplash.com/photos/2347729843y7/download?force=true&w=2400&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://unsplash.com/photos/2347729843y7/download?force=true&w=24&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://unsplash.com/a/img/empty-states/photos.png?bust=${Math.random()}`,
  },
});

export const InvalidImage = Template.bind({});
InvalidImage.args = {
  ...inValidSource(),
  viewStyle: { height: 400, width: 400 },
  resizeMode: 'contain',
};

const invalidImageOnlySource = () => ({
  source: {
    uri: `https://unsplash.com/photos/2347729843y7/download?force=true&w=2400&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://unsplash.com/photos/yNvVnPcurD8/download?force=true&w=24&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://unsplash.com/a/img/empty-states/photos.png?bust=${Math.random()}`,
  },
});
export const InvalidImageButWithValidThumbnail = Template.bind({});
InvalidImageButWithValidThumbnail.args = {
  ...invalidImageOnlySource(),
  viewStyle: { height: 400, width: 400 },
  resizeMode: 'contain',
};

export const CustomImageFadeDuration = Template.bind({});
CustomImageFadeDuration.args = {
  ...validSource(),
  viewStyle: { height: 400, width: 400 },
  resizeMode: 'contain',
  thumbnailFadeDuration: 250,
  imageFadeDuration: 2000,
};
