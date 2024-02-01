import Styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const height = Dimensions.get('window').height;


export const Container = Styled.SafeAreaView`
  margin:5px;
  border-radius:5px;
  background-color: ${({theme})=> theme.colors.primary };
  height: 120px;
`;

export const Bet = Styled.View`
  flex:1;
  padding-left: 8px;
  padding-right: 8px;
  border-radius:5px;
  margin-bottom:10px;
`;

export const Resume = Styled.View`
  margin-top:10px ;
`;

export const RowDetails = Styled.View`
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;	
  background-color: ${({theme})=> theme.colors.cg_orange_dark }; 
  justify-content:space-between;
  align-items:center;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction:row;
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

export const MatchWinner = Styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const MatchWinnerName = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-size: ${RFValue(24,height)}px;
`;
export const MatchWinnerOdds = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-size: ${RFValue(24,height)}px;
`;

export const MatchWinnerNameSubtitle = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-size: ${RFValue(10,height)}px;
`;

export const MatchWinnerOddsSubtitle = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
`;

export const ContainerMatchWinner = Styled.View`
  margin-top:15px;
  justify-content:space-between;
`
export const RemoveContainer = Styled.TouchableOpacity`
  justify-content:center;
  background-color: ${({theme})=> theme.colors.cg_red_medium }; 
  align-items: center;
  border-radius:20px;
  width: 30px;
  height: 30px; 
  margin-right:10px;
`;

export const Remove = Styled.Text`
color: ${({theme})=> theme.colors.cg_white };
`;