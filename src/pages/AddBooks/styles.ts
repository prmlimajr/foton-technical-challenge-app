import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fffcf9;
  padding: 0 20px;
  padding-top: 53px;
  padding-bottom: 38px;
`;

export const Title = styled.Text`
  color: #ff6978;
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
`;

export const FormContainer = styled.View`
  margin-top: 57px;
`;

export const Label = styled.Text`
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Field = styled.TextInput`
  height: 48px;
  background: #fff;
  border-radius: 10px;
`;

export const LongTextField = styled.TextInput`
  height: 228px;
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

export const CameraEnabler = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
