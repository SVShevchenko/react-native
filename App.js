import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, deselectPlace, selectPlace } from './src/store/actions/index';


class App extends Component {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    }

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    }

    render () {
        console.log(this.props, 'prop')
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput
                    onPlaceAdded={this.placeAddedHandler}
                />
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.placeSelectedHandler}
                />
            </View>
        );
    }
};

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App)


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: NewApp,
        //Dashboard: Dashboard
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'green',
            }
        }
    }
)

const AppStackNavigator = createStackNavigator(
    {
        Home: NewApp
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'green',
            }
        }
    }
)

const AppNav = createAppContainer(AppStackNavigator)

export default AppNav

