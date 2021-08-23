import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        errMsg: "",
        phoneno: "",
        email: "",
    }

    onSignUp = () => {
        fetch('http://localhost:5000/userSignUp', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              phoneno: this.state.phoneno,
              email: this.state.email
            })
          })
            .then(response => response.json())
            .then(json => {
              console.log(json)
            })
            .catch(error => {
             console.log(error)
            });
        this.props.navigation.navigate('BoxSignUp')
    }

    validateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(this.state.email) === false) {
            alert("Email is Not Correct");
            this.setState({ email: "" })
            return false;
        }
        else {
            this.onSignUp();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Welcome To RenIoT</Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Create a free account</Text>

                <Animatable.View
                    ref={this.validateInput}>
                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Username"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ username: text })
                        }
                        }
                    />

                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Phone Number"
                        onChangeText={(number) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ phoneno: number })
                        }
                        }
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Email address"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ email: text })
                        }
                        }
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>

                <TouchableOpacity
                    onPress={() => this.validateEmail()}
                    style={{ width: 150, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                >
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Sign Up Here</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>

                    <View style={{ flexDirection: 'row', marginTop: 60 }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
                        </View>
                        <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
                        </View>
                        <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
                        </View>
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
