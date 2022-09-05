import {Dimensions, StyleSheet} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: deviceHeight > 500 ? 500 : 350,
  },
  hero_container: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 15,
  },
  hero_name: {
    fontFamily: 'Antonio-Bold',
    color: 'black',
    fontSize: 22,
    maxWidth: deviceHeight > 500 ? 250 : 150,
  },
  description: {
    fontFamily: 'Antonio-Regular',
    fontSize: 14,
    marginTop: 5,
  },
  comics_series_events: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    color: 'red',
    fontFamily: 'Antonio-SemiBold',
    fontSize: 16,
  },
});
