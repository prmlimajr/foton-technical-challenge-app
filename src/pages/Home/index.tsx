import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <RectButton onPress={() => navigation.navigate('Detail')}>
        <Text>Detail</Text>
      </RectButton>
    </View>
  );
}
