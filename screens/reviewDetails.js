import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import { globalStyles } from "../styles/global";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ReviewDetails({ route, navigation }) {

    const { title } = route.params;
    const { body } = route.params;
    const { rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity  onPress={() => navigation.goBack()}>
               <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity> 
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
          
        </View>
    );
}