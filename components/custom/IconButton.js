import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');
const rem = width / 411.42857142857144;

import iconAdd from 'assets/plus-26-white.png';

const IconButton = ({
  disabled,
  size,
  iconSize,
  primaryColor,
  disabledColor,
  iconButton,
  onPressButton,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 2,
      backgroundColor: disabled ? disabledColor : primaryColor,
    },
    centerImage: {
      width: iconSize,
      height: iconSize,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressButton}
        disabled={disabled ? disabled : false}
        style={styles.button}>
        <Image source={iconButton} style={styles.centerImage} />
      </TouchableOpacity>
    </View>
  );
};

IconButton.defaultProps = {
  size: 30 * rem,
  iconSize: 25 * rem,
  iconButton: iconAdd,
  primaryColor: 'transparent',
  disabledColor: '#909596',
};

export default IconButton;
