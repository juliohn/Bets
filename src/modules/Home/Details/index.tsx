import React,{ useState,useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';

import { ParamList } from './types';

import { useRoute } from '@react-navigation/native';

import {useNavigation} from '@react-navigation/native';

import { PendingItem } from '../../../components/PendingItem';
import { BetPendingItemProps} from '../types';

import {
  PendingList,
  Container,
  WrapBetsPending,
  BetsPendingText,
  BetsPendingTextQuantity,
  WrapQuantity,
} from './styles';

export function  PendingBetsDetails() {

  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const navigation = useNavigation();

  const  { pending }  = route.params;

  const [pendingBetsDetails, setPendingBetsDetails] = useState<BetPendingItemProps[]>(pending);

  const renderItem = ({ item }: { item: BetPendingItemProps }) => {
    return (
        <PendingItem item={item} handleClick={removeItemPending}/>
    )
  };

  const removeItemPending = (data:BetPendingItemProps) => {
    const update = pendingBetsDetails.filter(item => item.winnerId !== data.winnerId);
    setPendingBetsDetails(update);
  }

  const goToHome = () =>{
      
    setPendingBetsDetails([]);

    alert('Ok');

    setTimeout(() => {
      return navigation.navigate('Home', {
        action: 'reset'
      });
    }, 1000);
  }

  return (
      <Container>
            <WrapBetsPending onPress={()=>goToHome()}>
              <BetsPendingText>
                Place Bets
              </BetsPendingText>
              <WrapQuantity>
                <BetsPendingTextQuantity>
                    {pendingBetsDetails.length}
                </BetsPendingTextQuantity>
              </WrapQuantity>
          </WrapBetsPending>

            <PendingList
                data={pendingBetsDetails}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />          
    </Container>          
  );
}