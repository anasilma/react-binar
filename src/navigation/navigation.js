import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';

import AppHome from '../view/AppHome';
import AppInves from '../view/AppInves';
import AppNews  from '../view/AppNews';

export const  AppTab = createBottomTabNavigator({

    Home:{
        screen : AppHome,
        navigationOptions: {
            tabBarLabel:"Beranda",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="md-home" size={20}/>
            )
          },
    },
    Inves:{
        screen : AppInves,
        
        navigationOptions: {
            
            tabBarLabel:"Investasi",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="md-stats" size={20}/>
            )
          },
    },
    News:{
        screen: AppNews,
        navigationOptions: {
            tabBarLabel:"Berita",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="md-document" size={20}/>
            )
          },
    },
   }, {
    // swipeEnabled: true,
    // shifting: true,
    // initialRouteName: 'Home'
    //  tabBarOptions: {
    //    activeTintColor: '#f2f2f2',
    //    activeBackgroundColor: "#2EC4B6",
    //    inactiveTintColor: '#s666',
    //    labelStyle: {
    //      fontSize: 22,
    //      padding: 12
    //     //   }
        // }
});

const AppContainer = createAppContainer(AppTab);

export default AppContainer;