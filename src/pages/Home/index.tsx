import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import {Container, Greeting, GreetingText, UserName} from './styles';

interface BooksProps {
  id: Number;
  name: String;
  author: String;
  description: String;
  cover: String;
}

export default function Home() {
  const navigation = useNavigation();

  const [userName, setUserName] = useState<String>('Paulo Lima')
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [books, setBooks] = useState<BooksProps[]>([]);

  useEffect(() => {
    try {
      getBooks()
    } catch (err) {
      console.log(err)
    } finally {

    }

    async function getBooks () {
      const response = await api.get(`/?page=${page}&perPage=${perPage}`)

      console.log(response.data)
      setBooks(response.data)
    }
  }, [])
  return (
    <Container>
      <SearchBar />
      
      <Greeting>
        <GreetingText>Hi, </GreetingText> 
        <UserName>{userName} 👋</UserName>
      </Greeting>

      <FlatList
        data={books}
        keyExtractor={book => book.id}
        renderItem={({item}) => {
          return <GreetingText>{item.name}</GreetingText>
        }}
      />
    </Container>
  );
}
