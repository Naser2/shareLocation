import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Touchable,
  FlatList
} from 'react-native';
import ListItem from '../ListItem/ListItem';

class PlaceList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outpuTitle}>
          <Text style={styles.oupuTitleText}>Saved Locations</Text>
        </View>

        <View style={styles.placeItemWrapper}>
          <FlatList
            data={this.props.places}
            renderItem={info => (
              <ListItem
                placeName={info.item.name}
                placeImage={info.item.image}
                selectedItemHandler={() =>
                  this.props.selectedItemHandler(info.item.key)
                }
              />
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    // justifyContent: 'center',
    paddingTop: 10
    // justifyContent: 'flex-start'
  },

  placeItemWrapper: {
    // opacity:0.1,
    backgroundColor: '#f0fcff',
    padding: 14
  },

  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },

  placeTextOuputStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 0,
    color: '#666',
    backgroundColor: 'rgba(5,165,209,.05)'
  },

  outpuTitle: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: '#dff1ff',
    backgroundColor: '#8cc1c1',
    borderWidth: 4,
    borderLeftColor: '#46c28e',
    borderRightColor: '#F5FCFF',
    borderBottomColor: '#F5FCFF',
    borderTopColor: '#F5FCFF'
  },
  oupuTitleText: {
    fontSize: 17,
    color: '#111111',
    fontWeight: '600',
    letterSpacing: 1.5,
    // lineHeight: 20,
    // paddingLeft: ,
    // paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 0,
    textAlign: 'center'
  },
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f44336'
  },
  errorLabel: {
    textAlignVertical: 'center'
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
  },
  button: {
    ...Platform.select({
      ios: {
        marginBottom: 0
      },
      android: {
        marginBottom: 10,
        marginTop: 10
      }
    })
  }
});

export default PlaceList;
