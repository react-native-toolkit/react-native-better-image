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
    uri: `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://pyt-images.imgix.net/images/place-holder.png?bust=${Math.random()}`,
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
    uri: `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://pyt-images.imgix.net/images/place-holder.png?bust=${Math.random()}`,
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
    uri: `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  thumbnailSource: {
    uri: `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  },
  fallbackSource: {
    uri: `https://pyt-images.imgix.net/images/place-holder.png?bust=${Math.random()}`,
  },
});
export const InvalidImageButValidThumbnail = Template.bind({});
InvalidImageButValidThumbnail.args = {
  ...invalidImageOnlySource(),
  viewStyle: { height: 400, width: 400 },
  resizeMode: 'contain',
};
