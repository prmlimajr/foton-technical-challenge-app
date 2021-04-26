import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import api from '../../services/api';
import {
  Container,
  Background,
  BookCoverDisplay,
  BookCover,
  BookShadow,
  BookTitle,
  BookAuthor,
  BookDescription,
} from './styles';

interface BookProps {
  id: Number;
  name: String;
  author: String;
  description: String;
  cover: String;
}

type Params = Number;

export default function Detail() {
  const [book, setBook] = useState({} as BookProps);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params as Params;

  useEffect(() => {
    try {
      getBook(id);
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

    async function getBook(id: Number) {
      const response = await api.get(`/${id}`);

      setBook(response.data);
    }
  }, []);

  return (
    <Container>
      <Background source={require('../../assets/detail.svg')}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        <BookCoverDisplay>
          <BookCover source={{uri: book.cover}} />
          <BookShadow elevation={10} />
        </BookCoverDisplay>

        <BookTitle>{book.name}</BookTitle>

        <BookAuthor>{book.author}</BookAuthor>

        <BookDescription>{book.description}</BookDescription>
      </Background>
    </Container>
  );
}
