import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useBook} from '../../hooks/BookContext';

import {Container, SearchField} from './styles';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const {getBooks} = useBook();

  useEffect(() => {
    getBooks({search, page: 1, perPage: 50});
  }, [search]);

  return (
    <Container>
      <Icon name="search" size={18} color="#dcd8d8" />

      <SearchField
        placeholder="Search book"
        value={search}
        onChangeText={setSearch}
      />
    </Container>
  );
}
