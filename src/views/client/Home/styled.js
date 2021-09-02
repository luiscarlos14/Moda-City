import styled from "styled-components/native";
import theme from '../../../config/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  flex: 1;
  background-color:  #050626;
`;

export const Button = styled.TouchableOpacity`
  padding-top: 30px;
  padding-left: 30px;
  position: absolute;
  z-index: 2;

`;

export const Image = styled.Image`
flex: 1;
z-index: 1;
width: auto;
margin-top: 5px;
`;

export const Body = styled.SafeAreaView`
  flex: 2;
  margin-top: 20px;
`;

export const MainHeader = styled.SafeAreaView`
  background-color: #F2F2F2;
  width: auto;
  height: 10%;
  border-bottom-width: 3px;
  border-color: #636573;
`;

export const HeaderBody = styled.Text`
  padding: 15px;
  font-size: 25px;
  padding-bottom: 20px;
`;

export const Cards = styled.View `
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;


export const Footer = styled.SafeAreaView`
  flex: 1;
`;
