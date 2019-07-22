import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.selectedItemHandler}>
      <View style={styles.listItem} >
        <Image source={props.placeImage} style={styles.placeImageStyle} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    color: '#666',
    backgroundColor: 'rgba(5,165,209,.05)',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    borderWidth: 0.5,
    borderColor: '#41dfff',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImageStyle: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});
export default ListItem;
