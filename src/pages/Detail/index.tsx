import React, {useEffect, useState} from 'react';
import {Share} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Tts from 'react-native-tts';
import api from '../../services/api';
import {
  Container,
  Background,
  BookCoverDisplay,
  BookCover,
  BookShadow,
  BookTitle,
  BookAuthor,
  DescriptionArea,
  BookDescription,
} from './styles';
import DetailMenu from '../../components/DetailMenu';

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
  const [isReading, setIsReading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);

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

  const handleTextToSpeech = () => {
    setIsListening(!isListening);
    if (isListening) {
      Tts.setDefaultLanguage('en-US');
      Tts.setDefaultRate(0.4);
      Tts.speak(`${book.name}, by ${book.author}. ${book.description}`);
    } else {
      Tts.stop();
    }
  };

  const onShare = () => {
    Share.share({
      message: `Share ${book.name}`,
    });
  };

  return (
    <Background source={isReading ? null : require('../../assets/detail3.png')}>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        {!isReading && (
          <BookCoverDisplay>
            <BookCover source={{uri: book.cover}} />
            {book.cover && <BookShadow elevation={10} />}
          </BookCoverDisplay>
        )}

        <BookTitle>{book.name}</BookTitle>

        <BookAuthor>{book.author}</BookAuthor>

        <DescriptionArea>
          <BookDescription>{book.description}</BookDescription>
        </DescriptionArea>

        <DetailMenu
          onPressSetIsReading={() => setIsReading(() => !isReading)}
          onPressSetIsListening={() => handleTextToSpeech()}
          onPressShare={() => onShare()}
        />
      </Container>
    </Background>
  );
}
