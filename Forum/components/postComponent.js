import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Editform from '../../assets/icons/NewPost.svg';
import Comment from '../../assets/icons/comment.svg';
import Thumbup from '../../assets/icons/thumbup.svg';
import Share from '../../assets/icons/share.svg';
import More from '../../assets/icons/morevertical.svg';

const postComponent = (post) => {
    return(
       <View>
           <View style={styles.feedItem}>
                
                <View style={{ flex: 1 }}>
                
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 7, borderBottomColor: "#E8E8E8", borderBottomWidth: 1}}>
                        
                        <View>
                            
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Image source={post.avatar} style={styles.avatar} />
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.name}>{post.name}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                                        <Text style={{fontWeight: '900',fontSize: 23, margin: -3,top: -3, paddingHorizontal: 4, fontWeight: 'bold'}}>.</Text>
                                        <Text style={styles.occupation}>{post.role}</Text>
                                    </View>
                                </View>
                                    
                                
                                {/* {post.role ? <Text></Text> : <Text></Text>} */}
                            </View>
                        </View>
                        <TouchableOpacity>
                            <More/>
                        </TouchableOpacity>    
                    </View>
                    <Text style={{fontWeight: "700", marginTop: 12}}>{post.title}</Text>
                    <Text style={styles.post}>{post.text}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: 100,marginTop: 5}}>
                        <View style={{ flexDirection: 'row',backgroundColor: '#FFA500',  borderRadius: 9, paddingHorizontal: 10}}>
                          <Icon name="tag" style={{padding: 4, color: "#ffffff"}}/>
                          <Text style={{color: "#ffffff"}}>
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
       </View> 
    )
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


export default postComponent;