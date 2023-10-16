import { View } from "react-native";
import { Text } from "@rneui/base"
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import {Marker} from 'react-native-maps';
import { useState } from "react";
export default function GeoScreen() {
    const [coords, setCoords] = useState({
        region: {
            latitude: 49.842957,
            longitude: 24.031111,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
        }
    })
    onCoordsChange = () => {
        setCoords({ region })
    }
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        smallHeaderTag: {
            alignSelf: "center",
            marginVertical: 4,
            textAlign: "center"
        }

    })


    return (
        <View style={styles.container}>
            <Text h4={true} style={styles.smallHeaderTag}>Who we are?</Text>
            <Text>ChairCo, where every chair carries the scent of quality craftsmanship. Our chairs not only exude style and comfort but also the unmistakable aroma of excellence in design and construction.</Text>
            <Text h4={true} style={styles.smallHeaderTag}>What payment methods does ChairCo accept?</Text>
            <Text>ChairCo accepts major credit cards, including Visa, MasterCard, and American Express, as well as PayPal for a convenient and secure payment experience.</Text>
            <Text h4={true} style={styles.smallHeaderTag}>What is ChairCo's return policy?</Text>
            <Text >ChairCo offers a hassle-free return policy within 30 days of purchase, allowing you to return your chair if it doesn't meet your expectations. Please review our detailed return policy on our website for more information.</Text>
            <Text h4={true} style={styles.smallHeaderTag}>Does ChairCo provide assembly instructions for their chairs?</Text>
            <Text > Yes, ChairCo includes clear assembly instructions with every chair purchase to make setup easy and straightforward. If you need additional assistance, our customer support team is here to help.</Text>
            <Text h3={true} style={styles.smallHeaderTag}>Find Us</Text>
            <MapView
                style={{ height: 200, width: "100%" }}
                initialRegion={coords.region}
                onCoordsChange ={onCoordsChange}
            >
                <Marker
                coordinate={{
                    latitude:49.84185087787666,
                    longitude:  24.024157363743253 
                }}
                title="Our Second Shop"
                description="Based on Grebinky Str."
                ></Marker>
                  <Marker
                coordinate={{
                    latitude:49.82670418926233,
                    longitude: 24.01299101438426 
                }}
                title="Our First Shop"
                description="Based on Lukash Str."
                ></Marker>
            </MapView>

        </View>
    )
}