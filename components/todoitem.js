import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ToDoItem({item, pressHandler}) {

    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>



    );}        /*returen*/

    const styles=StyleSheet.create({
        item:{
            margin:16,
            padding:16,
            borderWidth:1,
            backgroundColor:'#bbb',
            borderRadius:12,
            fontSize:25,

        }
    })

    
