import React from 'react';

import {
    Container,
    Title,
    Date,
    Resume,
    MatchWinner,
    MatchWinnerName,
    MatchWinnerOdds,
    MatchWinnerNameSubtitle,
    ContainerMatchWinner,
    RowDetails,
    RemoveContainer,
    Remove,
    Bet
    
} from './styles';

import {  BetPendingItemProps} from './../../modules/Home/types';
import { FormatDateENHour } from '../../helpers/DateFunctions';

export function  PendingItem( { item, handleClick } : { item: BetPendingItemProps , handleClick:(data:BetPendingItemProps) => void  }) {

  return (
      
      <Container onPress={() => {}}>
          <Bet>       
            <MatchWinner>
                <ContainerMatchWinner>
                    <MatchWinnerName>
                            {item.winnerBet}
                    </MatchWinnerName>
                    <MatchWinnerNameSubtitle>Match Winner</MatchWinnerNameSubtitle>
                </ContainerMatchWinner>
                <MatchWinnerOdds>
                    {item.winnerOddsBet}
                </MatchWinnerOdds>
            </MatchWinner>
          </Bet>   
           <RowDetails>
            <Resume>
                <Title>{item.game} </Title>
                <Date>{FormatDateENHour(item.scheduledAt)}</Date>
            </Resume>    
            <RemoveContainer onPress={() => handleClick(item)}>
                <Remove>
                        X
                </Remove>
            </RemoveContainer>
          </RowDetails>
        </Container>    
  );
}