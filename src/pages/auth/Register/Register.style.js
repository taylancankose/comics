import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  form_element: {
    margin: 10,
  },
  top_container: {
    flex: 0.4,
  },
  img: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  bottom_container: {
    flex: 0.6,
  },
  title: {
    fontFamily: 'Antonio-Bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
  },
  login_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  login_text: {
    fontSize: 14,
    fontFamily: 'Antonio-Medium',
  },
});
