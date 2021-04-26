import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useBook} from '../../hooks/BookContext';

import {Container, SearchField} from './styles';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const {getBooks} = useBook();

  useEffect(() => {
    return setSearch('');
  }, []);

  const handleSearch = async () => {
    getBooks({search, page: 1, perPage: 30});
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="search" size={18} color="#dcd8d8" />
      </TouchableOpacity>
      <SearchField
        placeholder="Search book"
        value={search}
        onChangeText={setSearch}
      />
    </Container>
  );
}
