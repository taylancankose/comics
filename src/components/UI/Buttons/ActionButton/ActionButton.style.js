import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    alignItems: 'center',
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Antonio-SemiBold',
    color: 'white',
  },
});
