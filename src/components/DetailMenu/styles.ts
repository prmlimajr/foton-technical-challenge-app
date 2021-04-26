import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  bottom: 53px;
  left: 20px;
  right: 20px;
  background: #ffffff;
  border-radius: 2px;
  flex-direction: row;
  padding: 20px 22px;
  justify-content: space-between;
  align-items: center;
`;

export const MenuButton = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  color: #3f4043;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  margin-left: 10px;
`;

export const Separator = styled.View`
  width: 2px;
  height: 16px;
  background-color: #979797;
  opacity: 0.2;
`;
