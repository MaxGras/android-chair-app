import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartCard from "../additionalComponents/CartCard";
export default function CartScreen() {
    const cartOfChairs = useSelector(state=> state.cart);
  

    return (
        <View>
              {cartOfChairs.length === 0 ? 
              (
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                   <Icon name="cart-arrow-down" size={150} color={"#cbc9c9"} ></Icon>
                   <Text style={{color:"#cbc9c9", fontSize:20}}>Add something to the Cart</Text>   
                </View>
              )
              
              :(<FlatList
              data={cartOfChairs}
              renderItem={({ item }) => (
               
                  <CartCard id = {item.id} count ={item.count} />
              )}
          />)
              
              }


        </View>
    )
}