import React from 'react';  
import FeedScreen from "../Forum/screens/ForumScreen/feed";  
import MyPostScreen from "../Forum/screens/ForumScreen/myPosts";  
import SavedPostScreen from "../Forum/screens/ForumScreen/savedPosts";
import Tag from "../Forum/screens/ForumScreen/tags"; 
import { Button, StyleSheet, Text, View, Image} from 'react-native'; 

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {

  return (
    <Tab.Navigator 
    tabBarOptions={{
        showLabel: false,
        swipeEnabled: false,
        showIcon: true,
        indicatorStyle: {
            backgroundColor: 'transparent',
        },
        style: {
            backgroundColor: '#ffffff',
        }
        
    }}>
      <Tab.Screen name="Feed" component={FeedScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 30, left: -9}}>
                <Text
                    style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 15, fontWeight: '600'}}
                >
                    Feed
                </Text>
                <Image
                    source={require('../assets/icons/Rectangle.png')}
                    resizeMode="contain"
                    style={{
                        width: 70,
                        height: 14,
                        top: 8,
                        tintColor: focused ? '#19A5B0' : 'transparent',
                    }}  
                />
            </View>
            
        )
      }}/>
      <Tab.Screen name="My Posts" component={MyPostScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 70, left: -32}}>
                <Text
                    style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 15, fontWeight: '600'}}
                >
                    My Posts
                </Text>
                <Image
                    source={require('../assets/icons/Rectangle.png')}
                    resizeMode="contain"
                    style={{
                        width: 70,
                        height: 14,
                        top: 8,
                        tintColor: focused ? '#19A5B0' : 'transparent',
                    }}  
                />
            </View>
            
        )
      }}/>
      <Tab.Screen name="Saved Posts" component={SavedPostScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 80, left: -32}}>
                <Text
                    style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 15, fontWeight: '600', flexDirection: 'row'}}
                >
                    Saved Posts
                </Text>
                <Image
                    source={require('../assets/icons/Rectangle.png')}
                    resizeMode="contain"
                    style={{
                        width: 70,
                        height: 14,
                        top: 8,
                        tintColor: focused ? '#19A5B0' : 'transparent',
                    }}  
                />
            </View>
            
        )
      }}/>
      <Tab.Screen name="Tags" component={Tag} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 50, left: -12}}>
                <Text
                    style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 15, fontWeight: '600'}}
                >
                    Tags
                </Text>
                <Image
                    source={require('../assets/icons/Rectangle.png')}
                    resizeMode="contain"
                    style={{
                        width: 70,
                        height: 14,
                        top: 8,
                        tintColor: focused ? '#19A5B0' : 'transparent',
                    }}  
                />
            </View>
            
        )
      }}/>
    </Tab.Navigator>
  );
}

export default TopTabs