import Styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width * 95 /100;


export const Container = Styled.View`
  justify-content:center;
  margin:5px;
  border-radius:5px;
  background-color: ${({theme})=> theme.colors.primary };
  height: 120px;
`;


export const Resume = Styled.View`
  padding: 12px;
  flex:1;
`;

export const RowOdds = Styled.View`
  /* min-height:60px; */
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
	justify-content: space-between;
	flex-direction: row;
  background-color: ${({theme})=> theme.colors.primary }; 
`;

export const Team = Styled.TouchableOpacity`
  flex:1;
  justify-content: space-between;
  align-items: center;
  margin-right:0.5px ;
  border-bottom-left-radius:5px;
  flex-direction: row;
  background-color: ${({theme})=> theme.colors.cg_orange_dark };
  padding: 15px;
`;

export const Adversary = Styled.TouchableOpacity`
  flex:1;
  justify-content: space-between;
  align-items: center;
  margin-left:0.5px ;
  border-bottom-right-radius:5px;
  flex-direction: row;
  background-color: ${({theme})=> theme.colors.cg_orange_dark };
  padding: 15px;
`;


export const Title = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-size: ${RFValue(16,height)}px; 
  margin-bottom:8px; 
`;

export const Date = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-size: ${RFValue(10,height)}px;  
  margin-bottom:5px; 
`;

  export const NameTeam = Styled.Text`
    color: ${({theme})=> theme.colors.cg_white };
    font-size: ${RFValue(12,height)}px;
  `;

  export const OddsValue = Styled.Text`
    color: ${({theme})=> theme.colors.cg_white };
    font-weight:bold
  `;

