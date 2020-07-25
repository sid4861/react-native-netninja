import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function Todoitem(props) {

    return(
        <TouchableOpacity style={styles.item} onPress={() => props.deleteTodo(props.item.key)} >
            <Text> {props.item.text} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed'
    }
});