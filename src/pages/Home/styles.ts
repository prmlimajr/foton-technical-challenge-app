import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fffcf9;
  padding: 0 20px;
  padding-top: 50px;
`;

export const Greeting = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 36px;
`;

export const GreetingText = styled.Text`
  color: #54565a;
  font-size: 24px;
`;

export const UserName = styled.Text`
  color: #ff6978;
  font-size: 24px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
