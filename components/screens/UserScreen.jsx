import { StyleSheet, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, Input } from "@rneui/base"
import { useState } from "react";
export default function UserScreen({ navigation }) {

   
    const [valueInput, setValueInput] = useState({
        email: '',
        password: ''
    })
    const [logIn, setLogIn] = useState(false);
    const [error, setError] = useState(false);
    const handleLogInChange = () => {
        setLogIn(!logIn);
    }

    const handlePressLogin = () => {
        if (!validateEmail(valueInput.email)) {
            setError(true);
        } else {
            setError(false);
            const loginUrl = new URL("https://6525afeb67cfb1e59ce79c10.mockapi.io/users");
            loginUrl.searchParams.append('emailUser', valueInput.email);
            fetch(loginUrl, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        console.log("error");
                        throw new Error('Network response was not ok');
                    }
                })
                .then(data => {
                    if (data[0].passwordUser === valueInput.password) {
                      navigation.navigate("UserAccount",{data:data[0],navigation:navigation });
                    } else {
                      
                        console.log("Wrong password");
                        setError(true);
                    }
                })
                .catch(error => {
                    console.error("Error with fetch", error);
                    setError(true);
                });
        }
    }
    
    const handleChangeInputEmail = (e) => {
        setValueInput((prevInput) => ({
            ...prevInput,
            email: e,
        }));
    };
    const handleChangeInputPassword = (e) => {
        setValueInput((prevInput) => ({
            ...prevInput,
            password: e,
        }));
    };

    return (


        <View style={styles.container}>
            <Icon name="person" size={150} color={"#cbc9c9"} ></Icon>


            {logIn ? (
                <View style={styles.loginAccount}>
                    <Text style={{ marginVertical: "5%" }} h2>Who are you?</Text>
                    <Input errorMessage={error? "Wrong E-mail or Password": ""} onChangeText={handleChangeInputEmail} label={"E-mail"} containerStyle={styles.loginInput} ></Input>
                    <Input  onChangeText={handleChangeInputPassword} label={"Password"} containerStyle={styles.loginInput} ></Input>
                    <View style={{ display: "flex", flexDirection: "column", width: "60%", height: "25%", justifyContent: "space-between" }}>

                        <Button onPress={handlePressLogin}>Log In</Button>
                        <Button onPress={() => navigation.navigate("UserSignUp",{navigation:navigation})}>I have no Account</Button>
                    </View>
                </View>

            )
                : (

                    <View style={styles.buttonContainer}>
                        <Text style={{ fontSize: 20 }}>Login or Sign Up</Text>
                        <Button onPress={handleLogInChange}>Log In</Button>
                        <Button onPress={() => navigation.navigate("UserSignUp",{navigation:navigation})}>Sign Up</Button>
                    </View>
                )}
        </View>


    )


}
const styles = StyleSheet.create({
    container: {
        display: "flex", justifyContent: "center", alignItems: "center", height: "100%"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        height: "30%",
        justifyContent: "space-between",
        padding: "5%",
        
    },
    loginAccount: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },
    loginInput: {
        width: "70%",
        marginVertical: 10
    }

})
export const validateEmail = (email) => {

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
};








