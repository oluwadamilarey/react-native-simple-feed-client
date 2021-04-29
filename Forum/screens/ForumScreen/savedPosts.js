import React, {Component} from 'react';  
import { View, Text, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';  
import posts from '../../../Forum/api/post.js';
import postComponent from '../../components/postComponent';
import Editform from '../../../assets/icons/NewPost.svg';


export default class SavedPostScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => postComponent(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
                <TouchableOpacity
                    activeOpacity={0.7}
                    //onPress={clickHandler}
                    style={styles.touchableOpacityStyle}>
                    <Editform style={styles.edit}/>
                </TouchableOpacity>
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
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    edit: {
        // shadowColor: "#FFA500",
        // shadowOffset: { height: 12 },
        // shadowOpacity: 0.2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 14,
        color: "#C4C6CE",
        marginTop: 4,
        paddingRight: 4
    },
    occupation: {
        fontSize: 14,
        color: "#C4C6CE",
        marginTop: 5,
        paddingLeft: 3,
    },
    post: {
        marginTop: 9,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    },
    floatingButtonStyle: {
        
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 120,
      },
});