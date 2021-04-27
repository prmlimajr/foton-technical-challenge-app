import React, {useState, useEffect} from 'react';
import SearchBar from '../../components/SearchBar';
import {useBook} from '../../hooks/BookContext';
import {AsyncStorage} from 'react-native';
import {Container, Greeting, GreetingText, UserName, List} from './styles';
import Book from '../../components/Book';

interface BooksProps {
  id: number;
  name: string;
  author: string;
  description: string;
  cover: string;
}

export default function Home() {
  const [userName, setUserName] = useState<string | null>('Stranger');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);

  const {books, getBooks} = useBook();

  useEffect(() => {
    getBooks({search: '', page, perPage});
    getName();
    console.log('montou');
  }, [userName]);

  const getName = async () => {
    const name = await AsyncStorage.getItem('@NoiaBooks:key');

    setUserName(name);
  };
  console.log(userName);
  return (
    <Container>
      <SearchBar />

      <Greeting>
        <GreetingText>Hi, </GreetingText>
        <UserName>{userName} 👋</UserName>
      </Greeting>

      <List
        data={books}
        keyExtractor={(book: BooksProps) => book.id}
        numColumns={3}
        renderItem={({item}: {item: BooksProps}) => {
          return (
            <Book
              id={item.id}
              name={item.name}
              author={item.author}
              cover={item.cover}
              description={item.description}
            />
          );
        }}
      />
    </Container>
  );
}
