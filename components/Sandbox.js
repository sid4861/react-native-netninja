import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne} >   One </Text>
            <Text style={styles.boxTwo} > Two </Text>
            <Text style={styles.boxThree} > Three </Text>
            <Text style={styles.boxFour} > Four </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'space-around'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10
    },
    
    boxTwo: {
        backgroundColor: 'yellow',
        padding: 10
    },
    
    boxThree: {
        backgroundColor: 'coral',
        padding: 10
    },
    
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10
    }
});

