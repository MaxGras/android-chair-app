import { View } from "react-native"
import { Button, Text } from "@rneui/base"
import { StyleSheet } from "react-native"
import { Input } from "@rneui/themed"
import { useState } from "react"
import uuid from 'react-native-uuid';
import { validateEmail } from "./UserScreen"
export default function UserSignUp({navigation}){
    const [inputValue,setInputValue] = useState({
            loginUser: "",
            passwordUser: "",
            emailUser: "",
            countOfOrders: 0,
            id: uuid.v4()
    
    })
    const [errorInput,setErrorInput] = useState(false);
    const handleInputChange = (name, text) => {
        setInputValue({ ...inputValue, [name]: text });
    }
    const handleSecondPass = (text)=>{
        if(text !== inputValue.passwordUser){
            setErrorInput(true);
        }
        else{
            setErrorInput(false);
        }
    }
    const handlePressSignIn = ()=>{
        if(!validateEmail(inputValue.emailUser)){
            setErrorInput(true);
            return;
        }
        fetch("https://6525afeb67cfb1e59ce79c10.mockapi.io/users",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(inputValue)
        }).then(responce=>{
            if(!responce.ok){
                throw new Error(`Error of HTTP: ${responce.status}`);
            }
            return responce.json();
        }).then(data =>{
            navigation.navigate("UserAccount", {data:data, navigation:navigation});
            

        }).catch(error =>{
            console.log("Error ocured: ", error)
        })
    }
    return(

        <View style={styles.container}>
            <Text style={styles.headerContainer} h3>Lets start our history together</Text>
            <Input onChangeText={(text) => handleInputChange('loginUser', text)} value={inputValue.loginUser} label="Login"></Input>
            <Input onChangeText={(text) => handleInputChange('emailUser', text)} value={inputValue.emailUser} label="E-mail"></Input>
            <Input onChangeText={(text) => handleInputChange('passwordUser', text)} value={inputValue.passwordUser} label="Password"></Input>
            <Input onChangeText={handleSecondPass} label="rewrite password"></Input>
            {errorInput?(<Text style={{color:"red", textAlign:"center"}} h4>Error in login or Password</Text>): ("")}
            <View style={styles.buttonContainer}>
                <Button  onPress={handlePressSignIn}>Sign Up</Button>
                <Button onPress={()=>navigation.navigate("UserScreen")}>I already have an account</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        paddingVertical:"5%",
        paddingHorizontal:"8%",
        justifyContent:"space-between",
        height:"90%"
    },
    headerContainer:{
        textAlign:"center"
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"20%"

    }
})