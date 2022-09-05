import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
import Comics from './pages/ComicsStack/Comics';
import HeroDetails from './pages/HeroStack/HeroDetails';
import ComicDetails from './pages/ComicsStack/ComicDetails';
import Heroes from './pages/HeroStack/Heroes';
import HeroFavorites from './pages/FavoritesStack/HeroFavorites';
import ComicFavorites from './pages/FavoritesStack/ComicFavorites';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function App() {
  const [user, setUser] = useState();
  const logOutItem = () => {
    return (
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    );
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const Characters = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerRight: () => {
            return (
              <Pressable onPress={logout}>
                <Text>Logout</Text>
              </Pressable>
            );
          },
        }}
        defaultScreenOptions="Heroes">
        <Stack.Screen name="Heroes" component={Heroes} />
        <Stack.Screen name="HeroDetails" component={HeroDetails} />
      </Stack.Navigator>
    );
  };

  const ComicsStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerRight: () => {
            return (
              <Pressable onPress={logout}>
                <Text>Logout</Text>
              </Pressable>
            );
          },
        }}>
        <Stack.Screen name="AllComics" component={Comics} />
        <Stack.Screen name="ComicDetails" component={ComicDetails} />
      </Stack.Navigator>
    );
  };

  const FavoritesStack = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="HeroFavorites" component={HeroFavorites} />
        <TopTab.Screen name="ComicFavorites" component={ComicFavorites} />
      </TopTab.Navigator>
    );
  };

  const onAuthStateChanged = user => {
    setUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('logged out'));
  };

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../assets/images/shield.png')}
                  style={{height: 30, width: 30}}
                />
              ),
            }}
            name="Characters"
            component={Characters}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../assets/images/lover.png')}
                  style={{height: 30, width: 30}}
                />
              ),
            }}
            name="Favorites"
            component={FavoritesStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../assets/images/comic-book.png')}
                  style={{height: 30, width: 30}}
                />
              ),
            }}
            name="Comics"
            component={ComicsStack}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
