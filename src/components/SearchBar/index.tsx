import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Container, SearchField} from './styles';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [text, onChangeText] = useState("Useless Text");

  return (    
      <Container>
        <TouchableOpacity>
          <Icon name='search' size={18} color='#dcd8d8' />
        </TouchableOpacity>
        <SearchField
          placeholder="Search book"
          value={search}
          onChangeText={setSearch}
        />
      </Container>
  );
}
