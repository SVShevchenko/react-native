import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const placeDetail = ({ selectedPlace, onModalClosed, onItemDeleted }) => {
    return (
        <Modal
            onRequestModal={onModalClosed}
            visible={selectedPlace !== null}
            animationType="slyde"
        >
        <View style={styles.modalContainer}>
            {
                selectedPlace ? (
                <View>
                    <Image
                        source={selectedPlace.image}
                        style={styles.placeImage}
                    />
                    <Text style={styles.placeName}>
                        {selectedPlace.name}
                    </Text>
                </View>
                )
                : null
            }
            <View>
                <Button title="Delete" onPress={onItemDeleted} color="red" />
                <Button title="Close" onPress={onModalClosed} />
            </View>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create ({
    modalContainer: {
        margin: 50
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
    }
})

export default placeDetail;