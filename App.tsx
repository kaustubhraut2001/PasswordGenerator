import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const passwordschema = Yup.object().shape({
  passwordlength: Yup.number().min(4).required().max(16),
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
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <view>
          <Text> Password Generator</Text>
        </view>
        <Formik
          initialValues={{passwordlength: ''}}
          validationSchema={passwordschema}
          onSubmit={values => {
            generatepassword(Number(values.passwordlength));
          }}>
          {({
            values,
            errors,
            touched,
            isValid,

            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          }) => (
            <>
              <View>
                <Text>Enter the length of password</Text>
                <TextInput
                  // name="passwordlength"
                  onChangeText={handleChange('passwordlength')}
                  onBlur={handleBlur('passwordlength')}
                  value={values.passwordlength}
                  keyboardType="numeric"
                />
                {errors.passwordlength && touched.passwordlength && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.passwordlength}
                  </Text>
                )}
              </View>
              <View>
                <Text>Include Numbers</Text>
                <Switch
                  value={numbers}
                  onValueChange={setNumbers}
                  style={{marginBottom: 10}}
                />
              </View>
              <View>
                <Text>Include Symbols</Text>
                <Switch
                  value={symbols}
                  onValueChange={setSymbols}
                  style={{marginBottom: 10}}
                />
              </View>
              <View>
                <Text>Include Lowercase</Text>
                <Switch
                  value={lowercase}
                  onValueChange={setlowercase}
                  style={{marginBottom: 10}}
                />
              </View>
              <View>
                <Text>Include Uppercase</Text>
                <Switch
                  value={uppercase}
                  onValueChange={setuppercase}
                  style={{marginBottom: 10}}
                />
              </View>
              <View>
                <Button
                  // onPress={handleSubmit}
                  title="Generate Password"
                  disabled={!isValid}
                />
              </View>
              <View>
                <Button onPress={resetpassword} title="Reset" />
              </View>
              <View>
                <Text>{ispassgenerated ? password : ''}</Text>
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
