import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    margin: 15,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    width: Dimensions.get('screen').width / 1.2,
    height: 40,
    borderRadius: 5,
    borderColor: 'gray',
    paddingLeft: 8,
  },
});
