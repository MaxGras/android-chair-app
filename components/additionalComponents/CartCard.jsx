
import { Text, Image, Icon, Button } from "@rneui/base"
import { deleteOne, setCount } from "../features/cartSlice";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectChairById } from "../features/chairSlice";

import { useState } from "react";

export default function CartCard({ id, count }) {
    const [currentCount, setCurrentCount] = useState(count);


    const chairSelected = useSelector((state) => selectChairById(state, id));
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteOne(id))
    }
    const handleChangeMinus = () => {
        if (currentCount !== 1) {
            const result = currentCount - 1;
            dispatch(setCount({ id: id, count: result }));
            setCurrentCount(result)

        }
    }
    const handleChangePlus = () => {
        if (currentCount !== chairSelected.count) {
            const result = currentCount + 1;
            dispatch(setCount({ id: id, count: result }));
            setCurrentCount(result)
        }
    }
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: "5%",
            paddingVertical: "5%",
            marginVertical: "1%",
            backgroundColor: "#E2E2E2",
            borderWidth: 1,
            borderColor: "#cbc9c9"
        },
        infoContainer: {
            display: "flex",
            flexDirection: "row"

        },
        image: {
            height: 100,
            width: 100,
            borderRadius: 27
        },
        textContainer: {
            display: "flex",
            justifyContent: "center",
            paddingHorizontal: "5%"
        },
        text: {
            fontSize: 18,
            fontWeight: "500"
        },
        interContainer: {
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between"
        },
        counterContainer: {
            display: "flex",
            flexDirection: "row",
            borderWidth: 2,
            alignItems: "center",
            borderColor: "#cbc9c9",
            borderRadius: 30,
            height: 50,
            width: "100%",
            justifyContent: "space-between"

        }



    })

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image style={styles.image} source={{ uri: chairSelected.imageUrl }}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{chairSelected.nameChair}</Text>
                    <Text style={styles.text}>Price: {chairSelected.price}$</Text>
                </View>
            </View>
            <View style={styles.interContainer}>
                <View style={styles.counterContainer}>
                    <Button onPress={handleChangeMinus} titleStyle={{ fontSize: 20 }} buttonStyle={{ paddingHorizontal: 12, backgroundColor: "#4ab6dc", height: "100%" }} containerStyle={{ borderTopLeftRadius: 30, borderBottomLeftRadius: 30, }} title={"-"}></Button>
                    <Text style={{ fontSize: 16 }}>{currentCount}</Text>
                    <Button onPress={handleChangePlus} titleStyle={{ fontSize: 20 }} buttonStyle={{ paddingHorizontal: 12, backgroundColor: "#4ab6dc", height: "100%" }} containerStyle={{ borderTopRightRadius: 30, borderBottomRightRadius: 30, }} title={"+"}></Button>
                </View>
                <Button onPress={handleDelete} buttonStyle={{ backgroundColor: "red" }} radius={60} ><Icon name="close" color={"#FFFFFF"} /></Button>
            </View>
        </View>

    )
}