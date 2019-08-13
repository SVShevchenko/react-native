import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = ({ onItemPressed, placeImag, placeName }) => (
    <TouchableOpacity onPress={onItemPressed} >
        <View style={styles.listItem}>
            <Image
                resizeMode="cover"
                source={placeImag}
                style={styles.placeImage}
            />
            <Text>
                {placeName}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 5,
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem;