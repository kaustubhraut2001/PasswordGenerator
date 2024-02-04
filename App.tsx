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

  const generatepassword = (passwordlength: number) => {
    let charaterkey = '';
    const uppercasechar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercasechar = 'abcdefghijklmnopqrstuvwxyz';
    const numberschar = '0123456789';
    const symbolschar = '!@#$%^&*()_+';
    if (numbers) charaterkey += numberschar;
    if (symbols) charaterkey += symbolschar;
    if (lowercase) charaterkey += lowercasechar;
    if (uppercase) charaterkey += uppercasechar;
    const password = createpasswor(charaterkey, passwordlength);
    setPassword(password);
    setisGenerated(true);
    // return password;
  };
  const createpasswor = (charector: string, passwordlength: number) => {
    let res = '';
    for (let i = 0; i < passwordlength; i++) {
      const charindex = Math.random() * charector.length;
      charector.charAt(charindex);
      res += charector.charAt(charindex);
    }
    return res;
  };
  const resetpassword = () => {
    setPassword('');
    setisGenerated(false);
    setNumbers(false);
    setSymbols(false);
    setlowercase(false);
    setuppercase(false);
    return;
  };

  return (
    <View>
      <Text>App Testning</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
