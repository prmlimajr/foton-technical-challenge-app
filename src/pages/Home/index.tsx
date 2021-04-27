import React, {useState, useEffect} from 'react';
import SearchBar from '../../components/SearchBar';
import {useBook} from '../../hooks/BookContext';

import {Container, Greeting, GreetingText, UserName, List} from './styles';
import Book from '../../components/Book';

interface BooksProps {
  id: Number;
  name: String;
  author: String;
  description: String;
  cover: String;
}

export default function Home() {
  const [userName, setUserName] = useState<String>('Stranger');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);

  const {books, getBooks} = useBook();

  useEffect(() => {
    getBooks({search: '', page, perPage});
  }, []);

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
