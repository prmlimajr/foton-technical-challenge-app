import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';

import {Container} from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <SearchBar />
    </Container>
  );
}
