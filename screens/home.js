import React , { useState }from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shareds/card";

export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

  
    return (
        <View style={globalStyles.container}>
         <FlatList 
            data={review}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ReviewDetails', item)}>
                 <Card> 
                      <Text style={globalStyles.titleText}>{ item.title }</Text>
                 </Card>
                 </TouchableOpacity>
            )}  />
        </View>
    );
 }

 styles = StyleSheet.create({   
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
    }
});