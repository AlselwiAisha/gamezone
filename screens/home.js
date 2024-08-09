import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from "../shareds/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [review, setReview] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((currentReview) => {
            return [review, ...currentReview];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.model}>
                        <Ionicons
                            name="close"
                            color="black"
                            onPress={() => setModalOpen(false)}
                            style={[styles.closeModel,styles.addNew]}
                        />
                        <View style={styles.modelContent}>
                            <ReviewForm addReview={addReview} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Ionicons
                name="add"
                color="black"
                onPress={() => setModalOpen(true)}
                style={styles.addNew}
            />
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    model: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    addNew: {
        fontSize: 28,
        marginBottom: 10,
        alignSelf: 'center',
        padding: 10,
    },
    closeModel: {
        marginTop: 40,
        marginBottom: 0,
    },
    modelContent: {
        flex: 1,
        padding: 10,
    },
});