import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import IonIcons from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductsList } from "../features/chairSlice";

const Tab = createBottomTabNavigator();
export default function Navigation() {
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




    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={homeName}
            
            screenOptions={({route})=>({
                headerShown:false,
                tabBarLabel: '',
                tabBarIcon:({focused,color,size})=>{
                    let iconName = focused? route.name :route.name+"-outline";
                    return <IonIcons name={iconName} size={size} color={color}/>
                }
            })}>


                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={cartName} component={HomeScreen}/>
                <Tab.Screen name={locationName} component={HomeScreen}/>
                <Tab.Screen name={userName} component={HomeScreen}/>
            </Tab.Navigator>
            
        </NavigationContainer>
        
    )

}