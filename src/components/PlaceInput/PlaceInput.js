import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import ListItem from '../ListItem/ListItem';

class PlaceList extends Component {
  state = {
    placeName: '',
    errors: []
  };

  placeNameHandler = val => {
    this.setState({
      errors: []
    });
    this.props.clearError()
    this.setState({ placeName: val });
 
  };

  inputSubmitHandler = () => {
    // this.props.error && this.setState({ errors: this.props.error });
    if (this.state.placeName.trim() === '') {
      this.setState({
        errors: ['Please Enter a place']
      });
    } else if (this.state.placeName.trim() !== '') {
      return this.props.addPlaceHandler(this.state.placeName);
    }
  };

  render() {
    const error = this.state.errors.map((error, index) => {
      return (
        <Text key={index} style={styles.errorText}>
          {error}
        </Text>
      );
    });

    return (
      <View style={styles.inputContainer}>
        <View>
          {this.state.errors && (
            <View style={styles.all_errors}>
              <View>{error}</View>
            </View>
          )}
        </View>
        <View>
          {/* {this.props.error ? (
            <View style={styles.all_errors}>
              <Text style={styles.errorText}> {this.props.error} </Text>
            </View>
          ) : null} */}
        </View>

        <View style={styles.contentWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.placeName.value}
            onChangeText={this.placeNameHandler}
            placeholder={'An awesome place'}
          />

          <View style={styles.smallBlueBtn}>
            <Button
              color="#FFFF"
              onPress={() => this.inputSubmitHandler(this.state.placeName)}
              title="Add"
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
 width:"100%",
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between'
  },

  contentWrapper: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 0
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 20
  },
  outputWrapper: {
    paddingBottom: 0,
    paddingTop: 0,
    // borderWidth: 1,//nice green
    // borderColor: 'rgb(24,149,73)',
    // borderColor: 'rgb(247,180,73)', //nice yelow
    borderRadius: 4
  },
  input: {
    width: '80%',
    backgroundColor: '#FFFF',
    paddingLeft: 15,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: 'rgb(0, 112, 201)',
    borderRadius: 4,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  },
  submitBtnAttr: {
    ...Platform.select({
      ios: {
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#1A73E8',
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 7,
        paddingBottom: 7,
        borderColor: '#1A73E8',
        borderRadius: 3,
        borderWidth: 3
      },
      android: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#1A73E8',
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#1A73E8'
      }
    })
  },
  smallBlueBtn: {
    ...Platform.select({
      ios: {
        width: '25%',
        paddingTop: 3,
        paddingBottom: 3,
        // padding: 20,
        // marginRight: 40,
        // marginLeft: 40,
        // marginBottom: 20,
        marginTop: 0,
        // paddingTop: 5,
        // paddingBottom: 5,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 3,
        borderColor: '#2196F3',
        backgroundColor: '#2196F3',
        fontSize: 17,
        color: '#FFFF'
      },
      android: {
        width: 300,
        marginTop: 0,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#2196F3',
        backgroundColor: '#2196F3',
        fontSize: 20,
        color: '#FFFF'
      }
    })
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
    paddingTop: 5,
    color: '#666',
    backgroundColor: 'rgba(5,165,209,.05)'
  },
  placeListGreenMark: {
    marginTop: 30,
    backgroundColor: '#46c28e',
    height: 50,
    borderRadius: 60,
    // width: '30%'
    width: '20%'
  },
  outpuTitle: {
    // marginLeft: 30,
    // marginRight: 30,
    marginTop: 30,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: '#dff1ff',
    borderWidth: 2,
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
  },
  all_errors: {}
});

export default PlaceList;
