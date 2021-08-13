import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

  render() {
    this.props.navigation.setOptions({ 
        headerBackTitle: '',
        headerShown: false ,
    })
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={require('../assets/login-logo.png')}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Hello!</Text>
        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center', marginHorizontal: 20 }} >Welcome to RenIoT</Text>

        <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{ backgroundColor: '#0d47a1', padding: 10, width: 120, borderRadius: 30, marginHorizontal: 2 }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('SignUp')}
            style={{ backgroundColor: '#FFF', padding: 10, width: 120, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#0d47a1' }}
          >
            <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

        
        

      </View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
})