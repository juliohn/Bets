import Styled from 'styled-components/native';

export const PendingList = Styled.FlatList``;

export const Container = Styled.SafeAreaView`
  margin:5px;
`;

export const WrapBetsPending = Styled.TouchableOpacity`
  margin:5px;
  height: 60px;
  background-color: ${({theme})=> theme.colors.secondary };
  border-radius:5px;
  justify-content: space-between;
  align-items: center;
  padding : 15px;
  flex-direction:row;
`;

export const WrapQuantity = Styled.View`
  border-radius:5px;
  justify-content: center;
  align-items: center;
  border-radius:20px;
  border-width:1px ;
  border-color:${({theme})=> theme.colors.cg_white };
  width: 30px;
  height: 30px;
`;

export const BetsPendingText = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-weight:bold;
`;

export const BetsPendingTextQuantity = Styled.Text`
  color: ${({theme})=> theme.colors.cg_white };
  font-weight:bold;
`;

