import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';



export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        userErrMsg: "",
        passwordErrMsg: "",
        invalidCredErrMsg: "",
        res_data: "false",
    }

    /*componentDidMount() {
       //GET Request
      /*fetch('http://localhost:5000/demo')
          .then(res => res.json()).then(
                data => this.setState({
                    res_data :  data.check //is now set to true
                })
              )
      
          
      }*/


    onLogin = () => {
       /* fetch('http://127.0.0.1:5000/userLogin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                uname: this.state.username,
                upassword: this.state.password
            }),
        })
            .then(res => res.json())
            .then(res => console.log(res));*/
        if (this.state.username == 'swathi' && this.state.password == '12345') {
            this.props.navigation.navigate('BoxLogin')
            //<BoxLoginScreen onLoginFunc={()=>this.onLogin()}/>
        }
        else{
            if(this.state.username == "") {
                this.setState({userErrMsg: "Username cannot be empty!"})
            } 
            if(this.state.password == "") {
                this.setState({passwordErrMsg: "Password cannot be empty!"})
            }
            else{
                this.validateInput.current.shake(600)
                this.setState({ invalidCredErrMsg: 'Invalid login details. Try again!' })
            }
        } 
    }

    render() {
        // console.log(this.state.res_data);  //After state set, page re-renders which displays the new value of res_data.
        //Initially res_data was set to false, after the api call, the backend returns a json obj which resets the value of res_data and prints new value.
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Welcome Back! </Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Sign in to continue</Text>



                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 10, outline: 'none' }}
                    placeholder="Username"
                    onChangeText={(text) => {
                        this.setState({ userErrMsg: '' }),
                            this.setState({ username: text })
                        }
                    }
                />
                <Text style={{ color: 'red', marginTop: 10 }}>{this.state.userErrMsg}</Text>

                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 10, outline: 'none' }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.setState({ passwordErrMsg: '' }),
                            this.setState({ password: text })
                        }
                    }

                />
                <Text style={{ color: 'red', marginTop: 10 }}>{this.state.passwordErrMsg}</Text>
                <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.invalidCredErrMsg}</Text>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.onLogin()}
                        style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Login Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                        style={{ marginTop: 20 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 18 }}>Forgot Password</Text>
                    </TouchableOpacity>



                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <Text style={{ color: 'gray' }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={{ fontWeight: 'bold' }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
