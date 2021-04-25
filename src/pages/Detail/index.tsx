import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export default function Detail() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Detail</Text>
      <RectButton onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </RectButton>
    </View>
  );
}
