import { Heading } from '@chakra-ui/react'
import ToDoList from './components/ToDoList';
import AddToDoList from './components/AddToDoList';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa';
import {useState, useEffect} from 'react';

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id:2,
      body: 'buy butter',
    },
  ];

  const [todos, setTodos] = useState(initialTodos)

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton  
      icon={<FaSun />} 
      isRound='true' 
      size="lg" 
      alignSelf="flex-end" 
      onClick={toggleColorMode}
      />
      <Heading py={5} fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
      bgClip="text">
        Todo Application
      </Heading>
      <ToDoList todos={todos} deleteTodo={deleteTodo}/>
      <AddToDoList addTodo={addTodo} />
    </VStack>
    
  );
}

export default App;
