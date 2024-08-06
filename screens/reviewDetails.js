import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {

    const { title } = route.params;
    const { body } = route.params;
    const { rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    );
}