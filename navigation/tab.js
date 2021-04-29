import React from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Forum/screens/feed';
import Booking from '../Forum/screens/booking';
import PrivateChat from '../Forum/screens/privateChat';
import Account from '../Forum/screens/account';
import Tracker from '../Forum/screens/tracker';


const Tab = createBottomTabNavigator();

const Tabs = () => {

    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 1,
                right: 1,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 7,
                height: 80,
                ...style.shadow
            }
                }}>
            <Tab.Screen name='Feed' component={Feed} options={
                {
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", justifyContent: 'center', top: -1}}>
                            <Image
                                source={require('../assets/icons/Forum.png')}
                                resizeMode="contain"
                                style={{
                                    width: 15,
                                    height: 25,
                                    tintColor: focused ? '#19A5B0' : '#748c94',
                                }}                            
                            />
                            <Text
                                style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 12, fontWeight: '600'}}
                            >
                                Forum
                            </Text>
                            <Image
                                source={require('../assets/icons/Polygon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 5,
                                    height: 8,
                                    tintColor: focused ? '#19A5B0' : '#ffffff',
                                }}  
                            />
                        </View>
                    )
                }}/>
            <Tab.Screen name='Private Chat' component={PrivateChat} options={
                {
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", justifyContent: 'center', top: -1}}>
                            <Image
                                source={require('../assets/icons/privateChat.png')}
                                resizeMode="contain"
                                style={{
                                    width: 15,
                                    height: 25,
                                    tintColor: focused ? '#19A5B0' : '#748c94',
                                }}                            
                            />
                            <Text
                                style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 12, fontWeight: '600'}}
                            >
                                Private Chat
                            </Text>
                            <Image
                                source={require('../assets/icons/Polygon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 5,
                                    height: 8,
                                    tintColor: focused ? '#19A5B0' : '#ffffff',
                                }}
                            />
                        </View>
                    )
                }}/>
            <Tab.Screen name='Account' component={Account} options={
                {
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", justifyContent: 'center', top: -1}}>
                            <Image
                                source={require('../assets/icons/profile.png')}
                                resizeMode="contain"
                                style={{
                                    width: 15,
                                    height: 25,
                                    tintColor: focused ? '#19A5B0' : '#748c94',
                                }}                            
                            />
                            <Text
                                style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 12, fontWeight: '600'}}
                            >
                                Account
                            </Text>
                            <Image
                                source={require('../assets/icons/Polygon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 5,
                                    height: 8,
                                    tintColor: focused ? '#19A5B0' : '#ffffff',
                                }}  
                            />
                        </View>
                    )
                }}/>
            <Tab.Screen name='Tracker' component={Tracker} options={
                {
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", justifyContent: 'center', top: -1}}>
                            <Image
                                source={require('../assets/icons/activity.png')}
                                resizeMode="contain"
                                style={{
                                    width: 15,
                                    height: 25,
                                    tintColor: focused ? '#19A5B0' : '#748c94',
                                }}                            
                            />
                            <Text
                                style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 12, fontWeight: '600'}}
                            >
                                Tracker
                            </Text>
                            <Image
                                source={require('../assets/icons/Polygon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 5,
                                    height: 8,
                                    tintColor: focused ? '#19A5B0' : '#ffffff',
                                }}  
                            />
                        </View>
                    )
                }}/>
            <Tab.Screen name='Booking' component={Booking} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", justifyContent: 'center', top: -1}}>
                            <Image
                                source={require('../assets/icons/clock.png')}
                                resizeMode="contain"
                                style={{
                                    width: 15,
                                    height: 25,
                                    tintColor: focused ? '#19A5B0' : '#748c94',
                                }}                            
                            />
                            <Text
                                style={{color: focused ? '#19A5B0' : '#748c94', fontSize: 12, fontWeight: '600'}}
                            >
                                Booking
                            </Text>
                            <Image
                                source={require('../assets/icons/Polygon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 5,
                                    height: 8,
                                    tintColor: focused ? '#19A5B0' : '#ffffff',
                                }}  
                            />
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 2
    }
})

export default Tabs;