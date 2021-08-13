import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

export default class BoxLoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        boxUserName: "",
        boxPassword: "",
        boxUserErrMsg: "",
        boxPassErrMsg: "",
        invalidCredErrMsg: "",
    }

    onBoxLogin = () => {
       /* fetch('http://127.0.0.1:5000/boxLogin', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
                uname :  this.state.boxUserName,
                upassword : this.state.boxPassword
            }),
          })
            .then(res => res.json())
            .then(res => console.log(res)); */

        if (this.state.boxUserName == 'swathi' && this.state.boxPassword == '12345') {
            this.props.navigation.navigate('RenIoT')
            //<BoxLoginScreen onLoginFunc={()=>this.onLogin()}/>
        }
        else{
            if(this.state.boxUserName == "") {
                this.setState({boxUserErrMsg: "Username cannot be empty!"})
            } 
            if(this.state.boxPassword == "") {
                this.setState({boxPassErrMsg: "Password cannot be empty!"})
            }
            else{
                this.validateInput.current.shake(600)
                this.setState({ invalidCredErrMsg: 'Invalid login details. Try again!' })
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Box Login Form</Text>


                <Animatable.View
                    ref={this.validateInput}>
                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Username"
                        onChangeText={(text) => {
                            this.setState({ boxUserErrMsg: '' }),
                                this.setState({ boxUserName: text })
                            }
                        }
                    />
                    <Text style={{ color: 'red', marginTop: 10 }}>{this.state.boxUserErrMsg}</Text>

                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ boxPassErrMsg: '' }),
                                this.setState({ boxPassword: text })
                            }
                        }
                    />
                    <Text style={{ color: 'red', marginTop: 10 }}>{this.state.boxPassErrMsg}</Text>
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>

                <TouchableOpacity
                    onPress={() => this.onBoxLogin()}
                    style={{ width: 150, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                >
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Box Login</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})