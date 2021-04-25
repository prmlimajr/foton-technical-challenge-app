import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import Toast from 'react-native-toast-message';
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

  const [userName, setUserName] = useState<String>('Paulo Lima');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [books, setBooks] = useState<BooksProps[]>([]);

  useEffect(() => {
    try {
      getBooks();
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Oops... This is awkward.',
        text2: 'It looks like we had some problem. Please try again',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }

    async function getBooks() {
      const response = await api.get(`/?page=${page}&perPage=${perPage}`);

      setBooks(response.data);
    }
  }, []);
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
          return <GreetingText>{item.name}</GreetingText>;
        }}
      />
    </Container>
  );
}
