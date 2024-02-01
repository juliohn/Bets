

export interface OutcomesProps {
    id:number,
    name:string,        
    odds:number,
}

export interface MarketItemProps {
    id:number,
    tournament:string,
    scheduled_at:string,
    outcomes:OutcomesProps[]
}

export interface DataMarketProps {
    markets:MarketItemProps[]
}

export interface BetPendingItemProps {
    winnerId:number,    
    winnerBet:string,
    winnerOddsBet:number,
    marketId:number,
    scheduledAt:string,
    game:string,
    odds:number,
    item?:MarketItemProps
}

export type ParamListHome = {
  Home: {
    action: string;
  };
};