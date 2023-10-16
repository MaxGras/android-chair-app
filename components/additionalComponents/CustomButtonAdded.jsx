
import { Button } from "@rneui/base"
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addOne } from "../features/cartSlice";
export default function CustomButtonAdded({id}){
    const dispatch = useDispatch();
    const carts = useSelector(state=>state.cart);
    const [isAdded,setIsAdded] = useState(false);
    const handlePressAdd = ()=>{
        if(!carts.some(item=>item.id ===id)){
            dispatch(addOne({id: id,count: 1}))
            setIsAdded(true);
        }
    }
    useEffect(() => {
        const isItemInCart = carts.some((item) => item.id === id);
        setIsAdded(isItemInCart);
      }, [carts, id]);


    return(
        <Button 
        disabledStyle={{backgroundColor:"#0a4765"}} 
        disabledTitleStyle={{color:"#FFFFFF"}} 
        containerStyle={{borderRadius: 27}} 
        buttonStyle={{paddingVertical: 15, paddingHorizontal: 30}} 
        disabled={isAdded} 
        onPress={handlePressAdd} 
        title={isAdded? "Added": "Add"}></Button>
   
    )
}