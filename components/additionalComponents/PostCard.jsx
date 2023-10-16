import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { selectChairById} from "../features/chairSlice"
import { addOne } from "../features/cartSlice"


import { View, Text, Image,StyleSheet } from "react-native"
import { Button} from "@rneui/base"

import CustomButtonAdded from "./CustomButtonAdded"
export default function PostCard({ id,  navigation }) {

    const chair = useSelector((state)=>selectChairById(state,id));
 


    const style = StyleSheet.create({
        container:{
            borderWidth: 1,
            backgroundColor: "#E2E2E2",
            borderRadius: 27,
            marginHorizontal: 30,
            marginBottom: "3%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
            paddingVertical: 15,
            
        },
        image:{
            height: 250,
            width: 250
        },
        naming:{
            fontSize: 20,
            fontWeight: "800",
            marginVertical: "2%"
        },
        buttonContainer:{
            display: "flex",
            marginVertical: "5%",
            width: "80%",
            flexDirection: "row",
           justifyContent: "space-between",
           
        }
    })

    return (
        <View style ={style.container}> 
          <Image 
            style = {style.image}
          source={{ uri: chair.imageUrl }} />
            <Text style={style.naming}>{chair.nameChair}</Text>
            <Text>Price: {chair.price}</Text>
            <View style={style.buttonContainer}>
                <Button containerStyle={{borderRadius: 27}} buttonStyle={{paddingVertical: 15, paddingHorizontal: 30}} onPress ={()=> navigation.navigate("SinglePost",{id:id})} title="View"></Button>
                 <CustomButtonAdded id={id}></CustomButtonAdded>
            </View>
        </View>
    )
}