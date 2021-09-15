import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled.View`
  flex: 1;
`;

export const HeaderImage = styled.Image`
  width: auto;
  height: 110%;
`;

export const Body = styled.View`
  flex: 1;
`;

export const BodyTitle = styled.Text `
font-size: 30px;
padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
font-weight: bold;

`;

export const BodyTitleSecondary = styled.Text `
font-size: 20px;
padding-left: 30px;
padding-bottom: 20px;

`;

export const Size = styled.Text `
font-size: 20px;
padding-left: 30px;
font-weight: bold;
padding-bottom: 20px;


`;

export const Price = styled.Text `
font-size: 25px;
padding-left: 30px;

`;


export const Footer = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 250px;
height: 150px;
margin-top: 15px;

`;
export const NameFooter = styled.Text``;
export const ImageFooter = styled.Image`
width: 100%;
height: 100%;
`;


