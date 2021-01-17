import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import BetterImage from 'react-native-better-image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
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
    return () => null;
  }, [delay]);
}

const ImageUrl = `https://images.unsplash.com/photo-1610746334198-e7525c63509c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=900`;
const ThumbnailUrl = `https://images.unsplash.com/photo-1610746334198-e7525c63509c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=90`;
const placeholderUrl = `https://unsplash.com/a/img/empty-states/photos.png`;

const validSource = {
  title: 'Valid Image & Thumbnail',
  image: () => `${ImageUrl}&bust=${Math.random()}`,
  thumbnail: () => `${ThumbnailUrl}&bust=${Math.random()}`,
  placeholder: () => placeholderUrl,
};

const inValidSource = {
  title: 'Invalid Image & Thumbnail',
  image: () => `not found`,
  thumbnail: () => `not found`,
  placeholder: () => placeholderUrl,
};

const invalidImageOnlySource = {
  title: 'Invalid Image & Valid Thumbnail',
  image: () => `not found`,
  thumbnail: () => `${ThumbnailUrl}&bust=${Math.random()}`,
  placeholder: () => placeholderUrl,
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
      <Text>Various scenarios will change every 5 seconds</Text>
      <Text>
        Scenario: <Text style={styles.titleStyle}>{imageSource.title}</Text>
      </Text>
      <BetterImage
        viewStyle={style}
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
      <Text>
        Photo by{' '}
        <Text
          style={styles.titleStyle}
          onPress={() =>
            Linking.openURL(
              'https://unsplash.com/@vovcarrot?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            )
          }
        >
          Vladimir Gladkov
        </Text>{' '}
        on{' '}
        <Text
          style={styles.titleStyle}
          onPress={() =>
            Linking.openURL(
              'https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            )
          }
        >
          Unsplash
        </Text>
      </Text>
    </View>
  );
}

export default App;
