import { useSelector } from "react-redux"
import {selectChairById} from "../components/features/chairSlice"
import { View, Text, Image,StyleSheet, Button } from "react-native"
export default function PostCard({ id }) {

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
            width: "60%",
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
                <Button title="View"></Button>
                <Button title="Add"></Button>
            </View>
        </View>
    )
}