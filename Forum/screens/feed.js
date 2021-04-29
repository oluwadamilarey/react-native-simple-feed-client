import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Editform from '../../assets/icons/NewPost.svg';
import Comment from '../../assets/icons/comment.svg';
import Thumbup from '../../assets/icons/thumbup.svg';
import Share from '../../assets/icons/share.svg';
import More from '../../assets/icons/morevertical.svg';
import posts from '../../Forum/api/post.js';
import postComponent from '../components/postComponent';
import TobTab from '../../navigation/topTab';
import Feeds from '../../Forum/screens/ForumScreen/feed';
import {createAppContainer} from 'react-navigation'; 
import Search from '../../assets/icons/search.svg';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Filter from '../../assets/icons/filter.svg';
import Notifications from '../../assets/icons/Notification.svg';




export default class Feed extends React.Component {
    render() {
        return (
        <View style={styles.container} >  
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Forum</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.item}>
                        <TouchableOpacity>
                            <Search/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}> 
                        <TouchableOpacity>
                            <Filter/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity>
                            <Notifications/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <TobTab/>
        </View>
        );
    }
}


const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8"
    },
    header: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 26,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    }, 
    item: {
        flexGrow: 0, flexShrink: 0, flexBasis: '10%'
    },
    headerTitle: {
       width: 90,
       height: 41,
       fontSize: 30,
       lineHeight: 41,
       color: '#25282B',
       flexGrow: 0, flexShrink: 0, flexBasis: '70%',
       fontWeight: 'bold',
       paddingLeft: 30
    }
});  
