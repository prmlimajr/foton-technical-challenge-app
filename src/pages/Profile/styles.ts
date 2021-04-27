import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fffcf9;
  padding: 30px 20px;
  padding-top: 50px;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  color: #54565a;
  font-size: 24px;
`;

export const Field = styled.TextInput`
  height: 48px;
  background: #fff;
  border-radius: 10px;
`;

export const Shadow = styled.View`
  margin-bottom: 39px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 48px;
  background: #ff6978;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;
