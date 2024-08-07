import React from "react";
import { StyleSheet, View, Text ,TouchableOpacity} from "react-native";
import { globalStyles } from "../styles/global";
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from "../shareds/card";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function ReviewDetails({ route, navigation }) {

    const { title } = route.params;
    const { body } = route.params;
    const { rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity  onPress={() => navigation.goBack()}>
               <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity> 
           <Card> 
            <Text style={globalStyles.paragraph}>{title}</Text>
            <Text style={globalStyles.paragraph}>{body}</Text>
            <View style={styles.rating}>
            <Text style={globalStyles.paragraph}>GameZone rating: </Text>
            <View style={{ flexDirection: 'row' }}>
                    {Array(rating).fill().map((_, i) => (
                        <AntDesign style={styles.heart} key={i} name="heart" size={24} color="black" />
                    ))}
                </View>
            </View>
          </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    heart: {
        color: '#cb4335',
       fontSize: 18,
        margin: 2,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        alignItems: 'center',
        alignContent: 'center',
    }
});