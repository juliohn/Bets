import React from 'react';

import {
    Container,
    Title,
    Date,
    RowOdds,
    Team,
    Adversary,
    NameTeam,
    OddsValue,
    Resume,
    
} from './styles';

import { MarketItemProps,OutcomesProps, BetPendingItemProps} from './../../modules/Home/types';
import { FormatDateENHour } from '../../helpers/DateFunctions';

export function  MarketItem( { item, handleClick } : { item: MarketItemProps , handleClick:(data:BetPendingItemProps) => void  }) {

  const handleClickSubmit = (item:MarketItemProps,itemBet:OutcomesProps) => {

    const bet:BetPendingItemProps = {
      winnerId:itemBet.id,
      winnerBet:itemBet.name,
      winnerOddsBet:itemBet.odds,
      marketId:item.id,
      scheduledAt:item.scheduled_at,
      odds:itemBet.odds,
      game: item.outcomes[0].name + " vs "+  item.outcomes[1].name 
    };
    
    handleClick(bet)
  }
  return (
      
      <Container onPress={() => {}}>
          <Resume>       
            <Title>{item.tournament}</Title>
            <Date>{FormatDateENHour(item.scheduled_at)}</Date>
          </Resume>   
           <RowOdds>
            <Team onPress={()=>handleClickSubmit(item,item.outcomes[0])}>
               <NameTeam>
                 {item.outcomes[0].name}
               </NameTeam>
               <OddsValue>
               {item.outcomes[0].odds}
               </OddsValue>
             </Team>
            
            
            <Adversary onPress={()=>handleClickSubmit(item,item.outcomes[1])}>
              <OddsValue>
              {item.outcomes[1].odds}
              </OddsValue>
              <NameTeam>
              {item.outcomes[1].name}
              </NameTeam>
            </Adversary>
          </RowOdds>
          
        </Container>    
  );
}