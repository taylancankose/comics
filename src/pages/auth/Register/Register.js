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
import styles from './Register.style.js';
import ActionButton from '../../../components/UI/Buttons/ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';

function Register() {
  const navigation = useNavigation();
  const [userForm, setUserForm] = useState({
    displayName: '',
    email: '',
    password: '',
    password2: '',
  });
  const handleRegister = async formValues => {
    const {email, password, password2, displayName} = formValues;
    if (password !== password2) {
      Alert.alert('Error', 'Passwords do not match!');
    }
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password, displayName)
        .then(userCredentials => {
          if (userCredentials.user) {
            userCredentials.user.updateProfile({
              displayName: displayName,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const navigateLogin = () => {
    navigation.navigate('Login');
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
        <Text style={styles.title}>Create An Account</Text>
        <Formik initialValues={userForm} onSubmit={handleRegister}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <View style={styles.form_element}>
                <TextPut
                  onChange={handleChange('displayName')}
                  values={values.displayName}
                  placeholder="Enter your username"
                />
              </View>
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
              <View style={styles.form_element}>
                <TextPut
                  placeholder="Confirm your password"
                  onChange={handleChange('password2')}
                  values={values.password2}
                  isPassword
                />
              </View>
              <ActionButton
                title="Register"
                style={styles.btn}
                actionPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        <Pressable style={styles.login_btn} onPress={navigateLogin}>
          <Text style={styles.login_text}>
            Already have an <Text style={{color: 'red'}}>account?</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Register;
