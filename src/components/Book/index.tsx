import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Container, BookCover, BookTitle, BookAuthor} from './styles';

interface BookProps {
  id: Number;
  name: String;
  author: String;
  cover: String;
}

export default function Book({id, name, author, cover}: BookProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', id)}>
      <Container>
        <BookCover source={{uri: cover}} />
        <BookTitle>{name}</BookTitle>
        <BookAuthor>by {author}</BookAuthor>
      </Container>
    </TouchableOpacity>
  );
}
