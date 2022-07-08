import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import React, {useState} from 'react'
import {nanoid} from 'nanoid';

function AddToDoList({addTodo}) {

  const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(content); conent of the bar
    if(!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }
    const todo = {
      id: nanoid(),
      body: content,
    }
    console.log(todo);
    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input variant="filled" placeholder="learning charkaui" value={content} onChange={ (e) => setContent(e.target.value) } />
        <Button colorScheme="pink" px="8" type='submit'>Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddToDoList
