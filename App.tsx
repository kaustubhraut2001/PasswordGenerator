import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import * as yup from 'yup';

const passwordschema = yup.object().shape({
  passwordlength: yup.number().min(4).required().max(16),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [ispassgenerated, setisGenerated] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [lowercase, setlowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);

  const generatepassword = (passwordlength: Number) => {};
  const createpasswor = (charector: string, passwordlength: Number) => {};
  const resetpassword = () => {};

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
