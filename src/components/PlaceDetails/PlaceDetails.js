import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button
} from 'react-native';

const PlaceDetails = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          source={props.selectedPlace.image}
          style={styles.placeImageStyle}
        />
        <Text style={styles.placeNameStyle}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onCloseModal}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title={'delete'} color={'red'} onPress={props.onItemDelete} />
          <Button title={'close'} onPress={props.onCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

export default PlaceDetails;
const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // paddingTop: 26,
    // justifyContent: 'flex-start',
    // padding: 26
    margin: 22
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
  placeImageStyle: {
    width: '100%',
    height: 200
  },
  placeNameStyle: {
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    fontWeight: 'bold',
    fontSize: 26
  }
});
