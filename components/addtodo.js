import { StyleSheet, Text, View, TextInput,Button} from 'react-native';
import React, {useState} from 'react';

export default function AddToDo({submitHandler}) {

    const [text,setText]= useState('');

    const changeHandler=(val)=>{

        setText(val);
    }

    return(
        <View style={styles.text}>
            
            <TextInput
            style={styles.input}
            placeholder='New todo'
            onChangeText={(val)=>changeHandler(val)}
            />
            <Button 
            style={styles.button}
            onPress={()=>
            submitHandler(text)
            }
            color='coral'
            title='submit'/>
        </View>
        



    );}        /*returen*/

    const styles=StyleSheet.create({
        text:{
            margin:16,
            padding:16,
            
            fontSize:20

        },
        input:{
            
            backgroundColor:'#bbb',
            borderWidth:1,
            padding:20,
            fontSize:30,
            marginBottom:10
        },
        button:{
            backgroundColor:'coral',
        }
    })

    
