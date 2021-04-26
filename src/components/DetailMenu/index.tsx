import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {Container, MenuButton, Label, Separator} from './styles';

interface DetailMenuProps {
  onPressSetIsReading: () => void;
  onPressSetIsListening: () => void;
}

export default function DetailMenu({
  onPressSetIsReading,
  onPressSetIsListening,
}: DetailMenuProps) {
  return (
    <Container elevation={4}>
      <TouchableOpacity onPress={onPressSetIsReading}>
        <MenuButton>
          <Icon name="book-open" size={16} color="#CFCBD2" />
          <Label>Read</Label>
        </MenuButton>
      </TouchableOpacity>
      <Separator />

      <TouchableOpacity onPress={onPressSetIsListening}>
        <MenuButton>
          <Icon name="headphones" size={16} color="#CFCBD2" />
          <Label>Listen</Label>
        </MenuButton>
      </TouchableOpacity>
      <Separator />

      <TouchableOpacity>
        <MenuButton>
          <Icon name="share" size={16} color="#CFCBD2" />
          <Label>Share</Label>
        </MenuButton>
      </TouchableOpacity>
    </Container>
  );
}
