import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import * as yup from 'yup';

const passwordschema = yup.object().shape({
  passwordlength: yup.number().min(4).required().max(16),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
