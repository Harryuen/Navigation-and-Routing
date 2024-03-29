// App.jsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Ensure this import statement is correct
import ToDoForm from './ToDoForm'; // Ensure this import statement is correct

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
