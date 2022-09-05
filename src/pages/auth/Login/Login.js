import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import TextPut from '../../../components/UI/Inputs/TextPut';
import styles from './Login.style.js';
import ActionButton from '../../../components/UI/Buttons/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  });
  const handleRegister = async formValues => {
    const {email, password} = formValues;
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => console.log(user));
    } catch (error) {
      console.log(error);
    }
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.top_container}>
        <Image
          source={require('../../../../assets/images/bg.jpg')}
          style={styles.img}
        />
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.title}>Login</Text>
        <Formik initialValues={userForm} onSubmit={handleRegister}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <View style={styles.form_element}>
                <TextPut
                  placeholder="Enter your email"
                  onChange={handleChange('email')}
                  values={values.email}
                />
              </View>
              <View style={styles.form_element}>
                <TextPut
                  placeholder="Enter your password"
                  onChange={handleChange('password')}
                  values={values.password}
                  isPassword
                />
              </View>
              <ActionButton
                title="Login"
                style={styles.btn}
                actionPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        <Pressable style={styles.login_btn} onPress={navigateRegister}>
          <Text style={styles.login_text}>
            Don't you have an <Text style={{color: 'red'}}>account?</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Login;
