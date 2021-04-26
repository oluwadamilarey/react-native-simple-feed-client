import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


posts = [
    {
        id: "1",
        name: "Anonymous",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: 1619379645000,
        avatar: require("./assets/tempAvatar.jpg"),
        image: require("./assets/tempImage1.jpg"),
        role: "Mother"
    },
    {
        id: "2",
        name: "Dr. Yusuf Shittu",
        text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: 1619379645000,
        avatar: require("./assets/tempAvatar.jpg"),
        image: require("./assets/tempImage2.jpg"),
        role: "Paedatrician"
    },
    {
        id: "3",
        name: "Tony Badmus",
        text:
            "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
        timestamp: 1619379645000,
        avatar: require("./assets/tempAvatar.jpg"),
        image: require("./assets/tempImage3.jpg"),
        role: "Paedatrician"
    },
    {
        id: "4",
        name: "Tunde Malone",
        text:
            "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
        timestamp: 1619379645000,
        avatar: require("./assets/tempAvatar.jpg"),
        image: require("./assets/tempImage4.jpg")
    }
];

export default class App extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                            <Text style={styles.occupation}>{post.role}</Text>
                        </View>

                        <Icon name="ellipsis-v" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <View style={{ flexDirection: "row", paddingTop: 19}}>
                        <Icon name="thumbs-up" size={24} color="#73788B" style={{ marginRight: 16 }} /><Text>1250</Text>
                        <Icon name="comment-dots" size={24} color="#73788B" style={{ paddingLeft: 70 }} /><Text>50</Text>
                        <Icon name="share-square" size={24} color="#73788B" style={{ paddingLeft: 70 }} />
                        

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
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    occupation: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 6
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});
