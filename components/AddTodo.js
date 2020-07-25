import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View} from 'react-native';

export default function AddTodo(props){

    const [text, setText] = useState('');

    const changeHandler = (val)=> {
        setText(val);
    };

return(
    //changeHandler is automatically passed the value
    <View>
        <TextInput   style={styles.input} placeholder='new todo...' onChangeText={ changeHandler } /> 

        <Button  onPress={() => {props.addTodo(text)}} title='add todo' color='coral' />
    </View>
);
}

const styles = StyleSheet.create({
input:{
marginBottom: 10,
paddingHorizontal: 10,
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#ddd',

}
});