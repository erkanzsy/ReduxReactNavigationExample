import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import IncreasePage from "./pages/IncreasePage";
import DecreasePage from "./pages/DecreasePage";

const store = configureStore();

const Tab = createBottomTabNavigator();

const App = () => {
  React.useEffect(()=>{
    console.log(store);
  })
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Increase" >
          <Tab.Screen name="Increase" component={IncreasePage}/>
          <Tab.Screen name="Decrease" component={DecreasePage}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
