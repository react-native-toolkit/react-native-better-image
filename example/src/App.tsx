import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BetterImage from 'react-native-better-image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function useInterval(callback: () => unknown, delay: number) {
  const savedCallback = useRef<() => unknown>(() => null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const validSource = {
  title: 'Valid Image & Thumbnail',
  image: () =>
    `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  thumbnail: () =>
    `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  placeholder: () => `https://pyt-images.imgix.net/images/place-holder.png`,
};

const inValidSource = {
  title: 'Invalid Image & Thumbnail',
  image: () =>
    `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  thumbnail: () =>
    `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  placeholder: () => `https://pyt-images.imgix.net/images/place-holder.png`,
};

const invalidImageOnlySource = {
  title: 'Invalid Image & Valid Thumbnail',
  image: () =>
    `https://pyt-images.imgix.net/images/app/pretrip/nowheretobefound.png?h=346.5&w=252&crop=fit&dpr=0.3&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  thumbnail: () =>
    `https://pyt-images.imgix.net/images/app/pretrip/australia.png?h=346.5&w=252&crop=fit&dpr=0.1&auto=format,compress,enhance&q=10&bust=${Math.random()}`,
  placeholder: () => `https://pyt-images.imgix.net/images/place-holder.png`,
};

const sources = [validSource, inValidSource, invalidImageOnlySource];

function App() {
  const [imageSource, setImageSource] = useState(sources[0]);

  const [intervalCounter, setIntervalCounter] = useState(0);

  useInterval(() => {
    const targetSource =
      intervalCounter === 0 ? 1 : intervalCounter === 1 ? 2 : 0;
    setImageSource(sources[targetSource]);
    setIntervalCounter(targetSource);
  }, 5000);

  const style = {
    backgroundColor: 'white',
    height: 346.5,
    width: 252,
    borderRadius: 9,
  };

  return (
    <View style={styles.container}>
      <Text>{imageSource.title}</Text>
      <BetterImage
        containerStyle={style}
        source={{
          uri: imageSource.image(),
        }}
        thumbnailSource={{
          uri: imageSource.thumbnail(),
        }}
        fallbackSource={{
          uri: imageSource.placeholder(),
        }}
        resizeMode={'cover'}
      />
    </View>
  );
}

export default App;
