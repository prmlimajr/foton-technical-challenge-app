import React, {useState} from 'react';
import {Alert, AsyncStorage, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Greeting,
  Field,
  Shadow,
  SubmitButton,
  ButtonText,
} from './styles';

export default function Profile() {
  const [name, setName] = useState<string>('');
  const navigation = useNavigation();

  const handleNameChange = async () => {
    if (name.trim().length === 0) {
      Alert.alert("Come on, don't try to fool me.");
    } else {
      try {
        await AsyncStorage.setItem('@NoiaBooks:key', name);
        navigation.navigate('Home');
      } catch (err) {
        Alert.alert('My bad. Try again.');
      }
    }
  };

  return (
    <Container>
      <Greeting>Hi, there!</Greeting>

      <Greeting>Would you be kind and let me know how can I call you?</Greeting>

      <Shadow elevation={20} style={styles.shadow}>
        <Field onChangeText={setName} />
      </Shadow>

      <SubmitButton onPress={handleNameChange}>
        <ButtonText>That's it!</ButtonText>
      </SubmitButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'rgb(212, 173, 134)',
    borderRadius: 10,
    shadowColor: 'rgb(212, 173, 134)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
});
