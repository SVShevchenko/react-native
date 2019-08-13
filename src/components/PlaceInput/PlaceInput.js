import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PlaceInput = (props) => {
    const [placeName, setPlaceName] = useState("");

    placeSubmitHandler = () => {
        if (placeName.trim() === "") {
            return
        }
        props.onPlaceAdded(placeName)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="Place"
                value={placeName}
                onChangeText={setPlaceName}
            />
            <Button
                title="Add"
                style={styles.placeButton}
                onPress={placeSubmitHandler}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
})

export default PlaceInput;