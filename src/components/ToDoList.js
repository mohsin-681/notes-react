import React from 'react'
import { HStack, VStack, Text, IconButton, Divider, Spacer, Badge} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';


function ToDoList({todos, deleteTodo}) {

  if (!todos.length) {
    return(
      <Badge colorScheme="green" p='4' m='4' borderRadius="lg">
        No Todos, Yay!
      </Badge>
    )
  }
  
  return (
    <VStack
      divider={<Divider />} 
      borderColor="gray.100" 
      borderWidth="2px" 
      p="4" 
      borderRadius="lg" 
      w="100%" 
      maxW={{base: '90vw', sm: '80vw', lg:'50vw', xl:'40vw'}}
      alignItems="stretch"
      >
    {todos.map(todo => (
      <HStack key={todo.id}>
        <Text>{todo.body}</Text>
        <Spacer />
        <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
      </HStack>
    ))}
    </VStack>
  )
}

export default ToDoList
