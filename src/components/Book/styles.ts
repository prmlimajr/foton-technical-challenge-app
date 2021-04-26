import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  max-width: 105px;
  margin-right: 15px;
  margin-bottom: 12px;
`;

export const BookCover = styled.Image`
  width: 95px;
  height: 153px;
  border-radius: 8px;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  margin-bottom: 9px;
`;

export const BookTitle = styled.Text`
  color: #313131;
  opacity: 0.8;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const BookAuthor = styled.Text`
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #313131;
  opacity: 0.8;
`;
