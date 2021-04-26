import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Container, BookCover, BookTitle, BookAuthor} from './styles';

interface BookProps {
  id: Number;
  name: String;
  author: String;
  cover: String;
  description: String;
}

export default function Book({
  id,
  name,
  author,
  cover,
  description,
}: BookProps) {
  const navigation = useNavigation();
  console.log({id});
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
