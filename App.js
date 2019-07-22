/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import placeImage from './src/assets/placeToSee.jpg';
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails';
export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
    errors: []
  };

  addPlaceHandler = placeName => {
    // const state = this.state.places;
    // const existing = function(placeName) {
    //   if (Object.values(state).indexOf(placeName) > -1) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };

    // // this.state.places.reduce(place => place.value ===placeName);

    // if (existing()) {
    //   this.setState({
    //     errors: ['APP This name is already on the list']
    //   });
    // } else {
    this.setState(prevState => {
      // alert(prevState)
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVlR6dOcK2Nn4SgV4uuzbHD6-yc8GqayIh8vu8HcUandZMt0S'
          }
        })
      };
    });
    // }
  };
  clearError = () => {
    this.setState({
      errors: []
    });
  };

  selectedItemHandler = requestedDelIDX => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === requestedDelIDX;
        })
      };
    });
  };
  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };
  closeModalHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };
  // placeDeleteHandler = requestedDelIDX => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== requestedDelIDX;
  //       })
  //     };
  //   });
  // };
  render() {
    const error = this.state.errors.map((error, index) => {
      return (
        <Text key={index} style={styles.errorText}>
          {error}
        </Text>
      );
    });
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.page_main_title}>Add Location</Text>
        </View>
        {this.state.errors && error}
        <PlaceInput
          addPlaceHandler={this.addPlaceHandler}
          error={this.state.errors}
          clearError={this.clearError}
        />

        <PlaceList
          places={this.state.places}
          selectedItemHandler={this.selectedItemHandler}
        />
        <PlaceDetails
          selectedPlace={this.state.selectedPlace}
          onItemDelete={this.placeDeleteHandler}
          onCloseModal={this.closeModalHandler}
          // selectedItemHandler={this.selectedItemHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 26,
    justifyContent: 'flex-start',
    padding: 26
  },
  page_main_title: {
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 70,
    color: '#111111',
    fontWeight: '700',
    letterSpacing: 2,
    lineHeight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    // color: '#0070c9',
    // color: '#333333',
    backgroundColor: '#edf4fb'
    // backgroundColor:'#dff1ff'
  },
  errorText: {
    textAlignVertical: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    color: 'red',
    backgroundColor: '#ffe5e5',
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    marginBottom: 10
  }
});
