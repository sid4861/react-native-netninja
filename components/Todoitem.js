import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Todoitem(props) {

    return (
        <TouchableOpacity onPress={() => props.deleteTodo(props.item.key)} >
            <View style={styles.item} >
                <MaterialIcons name="delete"  size={18} color='#333' />
                <Text style={styles.itemText} > {props.item.text} </Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 8
    }
});