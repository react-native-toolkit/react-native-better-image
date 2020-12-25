import React, { useRef, useCallback, useState, ReactNode } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
  ImageProps,
  ViewStyle,
  StyleProp,
  ImageSourcePropType,
  NativeSyntheticEvent,
  ImageErrorEventData,
} from 'react-native';
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';
import FastImage from 'react-native-fast-image';

export interface BetterImageProps extends ImageProps {
  viewStyle?: StyleProp<ViewStyle>;
  thumbnailFadeDuration?: number;
  imageFadeDuration?: number;
  isFast?: number;
  thumbnailSource?: boolean;
  thumbnailBlurRadius?: number;
  fallbackSource?: ImageSourcePropType;
  children?: ReactNode;
}

const { Value, createAnimatedComponent, timing } = Animated;

const AnimatedImage = createAnimatedComponent(Image);
const AnimatedFImage = createAnimatedComponent(FastImage);
const AnimatedImageBackground = createAnimatedComponent(ImageBackground);

const BetterImage = ({
  viewStyle,
  thumbnailFadeDuration = 250,
  imageFadeDuration = 250,
  thumbnailSource,
  source,
  isFast = false,
  onLoadEnd,
  resizeMethod,
  resizeMode,
  thumbnailBlurRadius = 1,
  style,
  fallbackSource = { uri: '' },
  onError,
  children,
  ...otherProps
}: BetterImageProps) => {
  const imageOpacity = useRef(new Value(0)).current;
  const thumbnailOpacity = useRef(new Value(0)).current;
  const thumbnailAnimationProgress = useRef<
    Animated.CompositeAnimation | undefined
  >();
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const onImageLoad = () => {
    setHasLoaded(true);

    timing(imageOpacity, {
      toValue: 1,
      duration: imageFadeDuration,
      useNativeDriver: true,
    }).start(() => {
      thumbnailAnimationProgress.current?.stop();
      timing(thumbnailOpacity, {
        toValue: 0,
        duration: thumbnailFadeDuration,
        useNativeDriver: true,
      }).start();
    });

    onLoadEnd && onLoadEnd();
  };

  const onThumbnailLoad = () => {
    if (!hasLoaded) {
      const progress = timing(thumbnailOpacity, {
        toValue: 1,
        duration: thumbnailFadeDuration,
        useNativeDriver: true,
      });
      thumbnailAnimationProgress.current = progress;
      thumbnailAnimationProgress.current.start();
    }
  };

  const onImageLoadError = (
    event: NativeSyntheticEvent<ImageErrorEventData>
  ) => {
    setHasError(true);
    onError && onError(event);
  };

  useDeepCompareEffectNoCheck(
    useCallback(() => {
      imageOpacity.setValue(0);
      thumbnailOpacity.setValue(0);
      setHasError(false);
      setHasLoaded(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
    [source, thumbnailSource]
  );

  const ImageComponent = children ? AnimatedImageBackground : isFast ? AnimatedFImage : AnimatedImage;

  return (
    <View style={[styles.imageContainerStyle, viewStyle]}>
      {thumbnailSource ? (
        <ImageComponent
          children={children}
          onLoadEnd={onThumbnailLoad}
          style={[
            styles.thumbnailImageStyle,
            { opacity: thumbnailOpacity },
            style,
          ]}
          source={thumbnailSource}
          blurRadius={thumbnailBlurRadius}
          resizeMethod={resizeMethod}
          resizeMode={resizeMode}
        />
      ) : null}
      <ImageComponent
        children={children}
        resizeMethod={resizeMethod}
        resizeMode={resizeMode}
        onLoadEnd={onImageLoad}
        onError={hasError ? () => null : onImageLoadError}
        source={hasError ? fallbackSource : source}
        style={[styles.imageStyle, { opacity: imageOpacity }, style]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainerStyle: {
    overflow: 'hidden',
  },
  thumbnailImageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  imageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default BetterImage;
