import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Flex} from '@/presentation/Screens/Flex';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '@/presentation/Screens/Home';
import {Counter} from '@/presentation/Screens/Counter';
import {Provider} from 'react-redux';
import store from '@/domain/Redux/store';
import {View, StyleSheet} from 'react-native';

const App: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <View style={styles.icon} />,
            }}
          />
          <Tab.Screen
            name="Flex"
            component={Flex}
            options={{
              tabBarIcon: () => <View style={styles.icon} />,
            }}
          />
          <Tab.Screen
            name="Counter"
            component={Counter}
            options={{
              tabBarIcon: () => <View style={styles.icon} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    backgroundColor: 'gray',
  },
});

export default App;
