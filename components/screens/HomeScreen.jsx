import { StatusBar } from "expo-status-bar"

import { View, FlatList } from "react-native"
import PostCard from "../PostCard";
import { StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { selectAllChairss, selectChairIds } from "../features/chairSlice";
export default function () {
    const allChairs = useSelector(selectAllChairss);
    const idsChairs = useSelector(selectChairIds)
    const sortingState = useSelector(state => state.chairs.sortingState);
  
 
    function sortByObjectName(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }
    
    
    const sortedChairs = [...idsChairs].sort((a, b) => {
        const objA = idsChairs.find((obj) => obj.id === a);
        const objB = idsChairs.find((obj) => obj.id === b);
        if (sortingState === 'name') { return sortByObjectName(objA, objB); }
        else if (sortingState === "count") { return objB.count - objA.count; }
        else if (sortingState === "weight") {
            const weightA = parseFloat(objA.weight);
            const weightB = parseFloat(objB.weight);
            return weightB - weightA;
        }
        else { return 0 }

    })

  

    const styles = StyleSheet.create({
        container: {
            paddingVertical: "5%"
        }
    })

    return (
        <View style={styles.container}>
            
            <FlatList
                data={sortedChairs}
                renderItem={({ item }) => (
                 
                    <PostCard id = {item} />
                )}
            />

            <StatusBar translucent={false} backgroundColor="#FFFFFF" />
        </View>
    )


}