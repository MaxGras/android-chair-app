import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import IonIcons from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductsList } from "../features/chairSlice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SinglePost from "./SinglePost"
import CartScreen from "./CartScreen";
import GeoScreen from "./GeoScreen";
export default function Navigation() {
  
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    const homeName = "home";
    const userName = "person";
    const cartName = "cart";
    const locationName = "location"



const dispatch = useDispatch();
const chairStatus = useSelector(state => state.chairs.status);
useEffect(() => {

  if (chairStatus === 'idle') {
  
    dispatch(getProductsList());
   
}

}, [chairStatus, dispatch]);

    function Home(){
        return(
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SinglePost" component={SinglePost} options={{ headerShown: false }}/>
             </Stack.Navigator>

        )
    }


    return (
       <>
     
        <NavigationContainer >
            <Tab.Navigator initialRouteName={homeName}     
            screenOptions={({route})=>({
                headerShown:false,
                tabBarLabel: '',
                tabBarIcon:({focused,color,size})=>{
                    let iconName = focused? route.name :route.name+"-outline";
                 
                    return <IonIcons name={iconName} size={size} color={color}/>
                }
            })}>
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={cartName} component={CartScreen}/>
                <Tab.Screen name={locationName} component={GeoScreen}/>
                <Tab.Screen name={userName} component={HomeScreen}/>
            </Tab.Navigator>
            
        </NavigationContainer>
        </>
    )

}