
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectChairById } from "../features/chairSlice";
import { Button, Image } from "@rneui/base";
import { StyleSheet } from "react-native";

export default function SinglePost({ route }) {
    const { id } = route.params;
    const chairSelected = useSelector((state) => selectChairById(state, id));
    const colorForChair = chairSelected.color.toLowerCase();
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            paddingHorizontal: "8%"
        },
        image: {

            height: 350,
            objectFit: "cover",
            width: 350,
            borderRadius: 27,
          

        },
        additionalContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#d9d9d9",
            borderRadius: 27,
            width: "100%",
            height: "40%",
            paddingHorizontal: "5%",
            paddingVertical: "7%",
            margin: "5%"
        },
        headerText: {
            fontSize: 30,
            fontWeight: "900",
            color: colorForChair
        },
        anotherTextStyle: {
            fontSize: 16,
           
        },
        

    })

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: chairSelected.imageUrl }}></Image>
            <View style={styles.additionalContainer}>
              
                    <Text style={styles.headerText}>{chairSelected.nameChair}</Text>
                    <Text style={styles.anotherTextStyle}>Price: {chairSelected.price}$</Text>
                    <Text style={styles.anotherTextStyle}>Color: {chairSelected.color}</Text>
                    <Text style={styles.anotherTextStyle}>Count: {chairSelected.count}</Text>
                    <Text style={styles.anotherTextStyle}>Weight: {chairSelected.weight}</Text>
                
            </View>
               
                <Button containerStyle={{width:"100%", borderRadius: 27}} buttonStyle={{padding: 15}}  title="Add To Cart"></Button>
                
        </View>
    )

}