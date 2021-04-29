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
        marginBottom: 4,
        backgroundColor: '#EBECF4',
        padding: 10,
        width: 300,
    }
})

export default TagComponent;