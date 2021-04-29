import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const TagComponent = (tag) => {
    return(
       
             <View style={styles.container}>
                <TouchableOpacity>
                <View style={styles.tag}>
                <Text>
                    {tag.name}
                </Text>
                <Text>
                    {tag.number}
                </Text>
                </View>
                
                </TouchableOpacity>
            </View>
        
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tag: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 9,
        backgroundColor: '#19A5B0',
        padding: 25,
        width: 300,
        margin: 0,
        borderRadius: 7
    }
})

export default TagComponent;