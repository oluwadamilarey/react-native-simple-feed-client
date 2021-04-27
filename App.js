import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Editform from './icons/NewPost.svg';
import Comment from './icons/comment.svg';
import Thumbup from './icons/thumbup.svg';
import Share from './icons/share.svg'
import More from './icons/morevertical.svg'
import Feed from "./screens/feed"




export default class App extends React.Component {

    render() {
        return (
            <Feed/>
        );
    }
}

