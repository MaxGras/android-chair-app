import { View, BackHandler } from "react-native";
import { Button, Text } from "@rneui/base";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";
export default function UserAccount({ route }) {
    console.log(route.params)
    const {data,navigation} = route.params;
   
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    return (

        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name="person" size={100} color={"#4ab6dc"} ></Icon>
            </View>
            <Text style={styles.textHeader} h3>Hello {data.loginUser}! Nice to see you here!</Text>
            <Text h4>Count of Orders: {data.countOfOrders}</Text>
                 <Button onPress={()=>navigation.navigate("UserScreen",{navigation:navigation})}>Log out</Button>
               
                
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingVertical: "5%",
        justifyContent: "space-between",
        height:"50%"

    },
    iconContainer: {
        padding: 10,
        backgroundColor: "#cbc9c9",
        borderRadius: 60,
    },
    textHeader:{
        textAlign: "center",
        width:"70%"
    },
 

})