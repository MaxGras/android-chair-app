import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import CartCard from "../additionalComponents/CartCard";
export default function CartScreen() {
    const cartOfChairs = useSelector(state=> state.cart);


    return (
        <View>
                <FlatList
                data={cartOfChairs}
                renderItem={({ item }) => (
                 
                    <CartCard id = {item.id} count ={item.count} />
                )}
            />


        </View>
    )
}