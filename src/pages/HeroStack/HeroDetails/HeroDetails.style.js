import {Dimensions, StyleSheet} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: deviceHeight > 500 ? 300 : 200,
  },
  hero_container: {
    margin: 20,
  },
  hero_name: {
    fontFamily: 'Antonio-Bold',
    color: 'red',
    fontSize: 22,
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
    marginBottom: 10,
  },
});
