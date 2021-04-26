import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  padding-top: 55px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fffcf9;
`;

export const BookCoverDisplay = styled.View`
  align-items: center;
  margin-bottom: 31px;
  margin-top: 15px;
`;

export const BookCover = styled.Image`
  width: 151px;
  height: 234px;
`;

export const BookShadow = styled.View`
  width: 136px;
  height: 1px;
  background-color: #fffcf9;
`;

export const BookTitle = styled.Text`
  color: #36383a;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1.5px;
  font-weight: bold;
`;

export const BookAuthor = styled.Text`
  color: #ff6978;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.670588px;
  margin-top: 7px;
  margin-bottom: 10px;
`;

export const DescriptionArea = styled.ScrollView``;

export const BookDescription = styled.Text`
  font-size: 14px;
  line-height: 25px;
  color: #313131;
  opacity: 0.6;
`;
