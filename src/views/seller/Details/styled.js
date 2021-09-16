import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled.View`
  flex: 1;
  background-color: burlywood;
`;

export const HeaderImage = styled.Image`
  width: auto;
  height: 100%;
  z-index: 1;

`;

export const Body = styled.View`
  flex: 1;
  background-color: brown;
`;

export const BodyTitle = styled.Text `
font-size: 30px;
padding: 20px;

`;

export const BodyTitleSecondary = styled.Text `
font-size: 20px;
padding-left: 10px;

`;

export const Size = styled.Text `
font-size: 20px;
padding-left: 10px;

`;

export const Price = styled.Text `
font-size: 20px;
padding-left: 10px;

`;

export const Button = styled.TouchableOpacity`
  padding-top: 20px;
  padding-left: 88%;

  position: absolute;
  z-index: 2;
`;

export const ButtonTwo = styled.TouchableOpacity`
  padding-top: 80px;
  padding-left: 88%;

  position: absolute;
  z-index: 2;
`;
