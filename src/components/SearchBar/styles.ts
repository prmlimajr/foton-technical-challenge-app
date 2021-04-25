import styled from 'styled-components/native';

export const Container = styled.View`
  background: #FDFCFC;
  border-radius: 10px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  height: 48px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const SearchField = styled.TextInput`
  color: #54565A;
  width: 90%;
  height: 44px;
  background: #FDFCFC;
  margin-left: 12px;
  line-height: 16px;
  font-size: 16px;
`;
