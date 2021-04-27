import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Editform from '../icons/NewPost.svg';
import Comment from '../icons/comment.svg';
import Thumbup from '../icons/thumbup.svg';
import Share from '../icons/share.svg';
import More from '../icons/morevertical.svg';


posts = [
    {
        id: "1",
        name: "Anonymous",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: 1619379645000,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage1.jpg"),
        role: "Mother",
        title: "My Baby is struggling to poop",
        tag: "sleeping"
    },
    {
        id: "2",
        name: "Dr. Yusuf Shittu",
        text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: 1619379645000,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage2.jpg"),
        role: "Paedatrician",
        title: "Is Your baby sleeping too much?",
        tag: "sad"
    },
    {
        id: "3",
        name: "Tony Badmus",
        text: "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
        timestamp: 1619379645000,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage3.jpg"),
        role: "Paedatrician",
        title: "Is Your baby sleeping too much?",
        tag: "crying"
    },
    {
        id: "4",
        name: "Tunde Malone",
        text:
            "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
        timestamp: 1619379645000,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage4.jpg"),
        role: "Gynaecologist",
        title: "Is Your baby sleeping too much?",
        tag: "stooling"
    }
];

export default class Feed extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 9, borderBottomColor: "#73788B", borderBottomWidth: 1}}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                                <Text style={{fontWeight: '900',fontSize: 23, margin: -1}}>.</Text>
                                <Text style={styles.occupation}>{post.role}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <More/>
                        </TouchableOpacity>    
                    </View>
                    <Text style={{fontWeight: "700", marginTop: 12}}>{post.title}</Text>
                    <Text style={styles.post}>{post.text}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: 100,marginTop: 5}}>
                        <View style={{ flexDirection: 'row',backgroundColor: '#FFA500',  borderRadius: 9, paddingHorizontal: 7}}>
                          <Icon name="tag" style={{padding: 4}}/>
                          <Text>
                           {post.tag}
                          </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 19, justifyContent: "space-evenly"}}>
                        <View style={{flexDirection: "row", position: 'relative', right: 23}}>
                        <TouchableOpacity style={{flexDirection: "row"}}>
                                <Thumbup/>
                                <View style={{paddingLeft: 5, marginBottom: 4}}>
                                    <Text>1245</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: "row", position: 'relative', right: 12}}>
                            <TouchableOpacity style={{flexDirection: "row"}}>
                                <Comment/>
                                <View style={{paddingLeft: 5, marginBottom: 4}}>
                                    <Text>50</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={{flexDirection: "row"}}>
                                <Share/>
                                <View style={{paddingLeft: 5, marginBottom: 4}}>
                                    <Text>Share</Text>
                                </View>
                            </TouchableOpacity>
                        </View>    
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
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
        backgroundColor: "#EBECF4"
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
        bottom: 30,
      },
});
