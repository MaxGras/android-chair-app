
import { Text, Image } from "@rneui/base"
import { View } from "react-native";
import { useSelector } from "react-redux";
import { selectChairById } from "../features/chairSlice";
export default function CartCard({ id, count }) {
    const chairSelected = useSelector((state) => selectChairById(state, id));

    return (
        <View>
            <View>
                <Image></Image>
                <Text>{chairSelected.nameChair}</Text>
                <Text>Price: {chairSelected.price}</Text>
            </View>
            <View></View>
        </View>

    )
}