import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { formatCurrency, roundNumber } from 'utils/formatHelper';

const TextLabel = ({ containerStyle, label, value, currencyFormat }) => {
  const innerStyle = { ...styles.container, ...containerStyle };
  const displayText =
    value.toString() !== ''
      ? currencyFormat
        ? formatCurrency(roundNumber(value, 2), 2)
        : value.toString()
      : '';
  return (
    <View style={innerStyle}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.input}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  label: {
    paddingBottom: 5,
    fontSize: 16,
  },
  input: {
    fontFamily: 'Cochin',
    fontSize: 16,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    height: 45,
  },
});

export default TextLabel;
