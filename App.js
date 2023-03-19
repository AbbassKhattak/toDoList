
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import Header from './components/Header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';


export default function App() {
  const [todo,setTodo]=useState(
    [{name:'google', key:'1'},
    {name:'yahoo', key:'2'},
    {name:'bing', key:'3'},
    {name:'goole', key:'4'},
  ]
  );

  const pressHandler=(key) =>{
    setTodo((prevTodo) =>{
      return prevTodo.filter(todo => todo.key!=key);
    }
    )
  }


  const submitHandler= (text)=>
  {
    if(text.length>3){
      setTodo( (prevTodo)=> 
      {
        return[
          {name: text, key:Math.random().toString()},
          ...prevTodo];
    });
  }
    else{
      Alert.alert(
        'OOPS','the todo should be more than 3 characters',[{text:'OK'}]
      );
    }

    
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        
        <View style={styles.list}>
        <FlatList
          
          data={todo}  
            renderItem={({item})=>(
              <ToDoItem  item={item}
              pressHandler={pressHandler}
              />
            )

            }
              />      
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    
  },
  list:{
    padding:10,
    marginTop:10,
    fontSize:30,
    backgroundColor:'green'
  },
  text: {
    fontSize: 30,
    color: '#fff',
    padding:20,
    
  },
  content:{
     
  }
});
