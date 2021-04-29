import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import Feed from "./Forum/screens/feed";
import Tabs from './navigation/tab';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


const App = () => {
    return(
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
);
}

export default App;