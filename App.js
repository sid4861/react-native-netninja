import React, { useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Header from './components/Header.js';
import Todoitem from './components/Todoitem.js';
import AddTodo from './components/AddTodo.js';

export default function App() {

const [todos, setTodos] = useState([
  {text: 'drink water', key: '1'},
  {text: 'read book', key: '2'},
  {text: 'arrange drawer', key: '3'}
]);  

const deleteTodo = (key) => {
  setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
  });
};

const addTodo = (text) => {
  setTodos((prevTodos) => {
    return [...prevTodos,
    { text: text, key: Math.random().toString() }];
  });
};

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content} >
        {/* to do form */}
        <AddTodo  addTodo={addTodo} />

      <View style={styles.list} >
        <FlatList  data={todos}  renderItem={
          ({item}) => {
            return <Todoitem item={item} deleteTodo={deleteTodo} />
          }
        } />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  content: {
    padding: 40
  },
  
  list: {
    marginTop: 20
  }
});
