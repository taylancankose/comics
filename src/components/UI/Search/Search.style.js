import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    width: Dimensions.get('screen').width / 1.1,
    height: 40,
    borderRadius: 2,
    padding: 10,
    backgroundColor: 'white',

    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});
