import React,{ useCallback, useState } from 'react';

import { useRoute } from '@react-navigation/native';

import {useNavigation} from '@react-navigation/native';

import { RouteProp, useFocusEffect } from '@react-navigation/native';

import { MarketItemProps ,BetPendingItemProps,ParamListHome} from './types';

import { MarketItem } from '../../components/MarketItem';

import {
  Container,
  MarketList,
  WrapBetsPending,
  BetsPendingText,
  BetsPendingTextQuantity,
  WrapQuantity,
} from './styles';

const data = [
  {
    "markets":[
       {
          "id":22627479,
          "outcomes":[
             {
                "id":57031030,
                "name":"OG",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.1,
                "specifiers":{
                   "$competitor1":"OG"
                },
                "competitor_id":2169759,
                "competitor":"OG"
             },
             {
                "id":57031031,
                "name":"Tickles",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":6.56,
                "specifiers":{
                   "$competitor2":"Tickles"
                },
                "competitor_id":2169760,
                "competitor":"Tickles"
             }
          ],
          "scheduled_at":"2024-01-11T16:15:00.000000Z",
          "updated_at":"2024-01-11T15:50:48.000000Z",
          "tournament":"BB Dacha West Europe Qualifier"
       },
       {
          "id":22623817,
          "outcomes":[
             {
                "id":57021331,
                "name":"PSG Quest",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":2.67,
                "specifiers":{
                   "$competitor1":"PSG Quest"
                },
                "competitor_id":2169681,
                "competitor":"PSG Quest"
             },
             {
                "id":57021332,
                "name":"Falcons",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.45,
                "specifiers":{
                   "$competitor2":"Falcons"
                },
                "competitor_id":2169682,
                "competitor":"Falcons"
             }
          ],
          "scheduled_at":"2024-01-11T16:45:00.000000Z",
          "updated_at":"2024-01-11T13:50:40.000000Z",
          "tournament":"BB Dacha MENA Qualifier"
       },
       {
          "id":22614800,
          "outcomes":[
             {
                "id":56998292,
                "name":"Papara SuperMassive",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.21,
                "specifiers":{
                   "$competitor1":"Papara SuperMassive"
                },
                "competitor_id":2168183,
                "competitor":"Papara SuperMassive"
             },
             {
                "id":56998293,
                "name":"Galakticos",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":3.68,
                "specifiers":{
                   "$competitor2":"Galakticos"
                },
                "competitor_id":2168184,
                "competitor":"Galakticos"
             }
          ],
          "scheduled_at":"2024-01-11T18:00:00.000000Z",
          "updated_at":"2024-01-11T15:23:41.000000Z",
          "tournament":"TCL Season Cup"
       },
       {
          "id":22614118,
          "outcomes":[
             {
                "id":56996920,
                "name":"Heroic",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":4.5,
                "specifiers":{
                   "$competitor1":"Heroic"
                },
                "competitor_id":2168177,
                "competitor":"Heroic"
             },
             {
                "id":56996921,
                "name":"Shopify Rebellion",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.19,
                "specifiers":{
                   "$competitor2":"Shopify Rebellion"
                },
                "competitor_id":2168178,
                "competitor":"Shopify Rebellion"
             }
          ],
          "scheduled_at":"2024-01-11T19:15:00.000000Z",
          "updated_at":"2024-01-11T15:24:24.000000Z",
          "tournament":"BB Dacha Americas Qualifier"
       },
       {
          "id":22580888,
          "outcomes":[
             {
                "id":56922770,
                "name":"SAGA",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":4.16,
                "specifiers":{
                   "$competitor1":"SAGA"
                },
                "competitor_id":2167019,
                "competitor":"SAGA"
             },
             {
                "id":56922771,
                "name":"DUSTY",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.18,
                "specifiers":{
                   "$competitor2":"DUSTY"
                },
                "competitor_id":2167020,
                "competitor":"DUSTY"
             }
          ],
          "scheduled_at":"2024-01-11T19:30:00.000000Z",
          "updated_at":"2024-01-10T04:14:14.000000Z",
          "tournament":"Icelandic Esports League"
       },
       {
          "id":22625642,
          "outcomes":[
             {
                "id":57025984,
                "name":"Secret",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.11,
                "specifiers":{
                   "$competitor1":"Secret"
                },
                "competitor_id":2169599,
                "competitor":"Secret"
             },
             {
                "id":57025985,
                "name":"KZ Team",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":6.19,
                "specifiers":{
                   "$competitor2":"KZ Team"
                },
                "competitor_id":2169600,
                "competitor":"KZ Team"
             }
          ],
          "scheduled_at":"2024-01-11T19:45:00.000000Z",
          "updated_at":"2024-01-11T14:47:42.000000Z",
          "tournament":"BB Dacha West Europe Qualifier"
       },
       {
          "id":22580899,
          "outcomes":[
             {
                "id":56922792,
                "name":"FH",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.88,
                "specifiers":{
                   "$competitor1":"FH"
                },
                "competitor_id":2167021,
                "competitor":"FH"
             },
             {
                "id":56922793,
                "name":"IA Akranes",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.8,
                "specifiers":{
                   "$competitor2":"IA Akranes"
                },
                "competitor_id":2167022,
                "competitor":"IA Akranes"
             }
          ],
          "scheduled_at":"2024-01-11T20:30:00.000000Z",
          "updated_at":"2024-01-10T04:14:22.000000Z",
          "tournament":"Icelandic Esports League"
       },
       {
          "id":22580903,
          "outcomes":[
             {
                "id":56922800,
                "name":"Por",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.24,
                "specifiers":{
                   "$competitor1":"Por"
                },
                "competitor_id":2167023,
                "competitor":"Por"
             },
             {
                "id":56922801,
                "name":"Atlantic Seafood",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":3.56,
                "specifiers":{
                   "$competitor2":"Atlantic Seafood"
                },
                "competitor_id":2167024,
                "competitor":"Atlantic Seafood"
             }
          ],
          "scheduled_at":"2024-01-11T21:30:00.000000Z",
          "updated_at":"2024-01-10T04:14:33.000000Z",
          "tournament":"Icelandic Esports League"
       },
       {
          "id":22614761,
          "outcomes":[
             {
                "id":56998210,
                "name":"Misa",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":2.57,
                "specifiers":{
                   "$competitor1":"Misa"
                },
                "competitor_id":2167450,
                "competitor":"Misa"
             },
             {
                "id":56998211,
                "name":"FUT",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.41,
                "specifiers":{
                   "$competitor2":"FUT"
                },
                "competitor_id":2167451,
                "competitor":"FUT"
             }
          ],
          "scheduled_at":"2024-01-11T14:00:00.000000Z",
          "updated_at":"2024-01-11T15:22:25.000000Z",
          "tournament":"TCL Season Cup"
       },
       {
          "id":22615030,
          "outcomes":[
             {
                "id":56998813,
                "name":"Team WE",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.27,
                "specifiers":{
                   "$competitor1":"Team WE"
                },
                "competitor_id":2168924,
                "competitor":"Team WE"
             },
             {
                "id":56998814,
                "name":"Hangzhou wkk",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":3.37,
                "specifiers":{
                   "$competitor2":"Hangzhou wkk"
                },
                "competitor_id":2168925,
                "competitor":"Hangzhou wkk"
             }
          ],
          "scheduled_at":"2024-01-12T05:00:00.000000Z",
          "updated_at":"2024-01-11T04:31:38.000000Z",
          "tournament":"Galaxy Cup"
       },
       {
          "id":22617442,
          "outcomes":[
             {
                "id":57005041,
                "name":"REMBAZA",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.55,
                "specifiers":{
                   "$competitor1":"REMBAZA"
                },
                "competitor_id":2169185,
                "competitor":"REMBAZA"
             },
             {
                "id":57005042,
                "name":"Seight",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":2.27,
                "specifiers":{
                   "$competitor2":"Seight"
                },
                "competitor_id":2169186,
                "competitor":"Seight"
             }
          ],
          "scheduled_at":"2024-01-12T06:00:00.000000Z",
          "updated_at":"2024-01-11T08:08:53.000000Z",
          "tournament":"ESPORTS BATTLE"
       },
       {
          "id":22615035,
          "outcomes":[
             {
                "id":56998823,
                "name":"Royal Never Give Up",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.18,
                "specifiers":{
                   "$competitor1":"Royal Never Give Up"
                },
                "competitor_id":2168926,
                "competitor":"Royal Never Give Up"
             },
             {
                "id":56998824,
                "name":"YMG",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":4.16,
                "specifiers":{
                   "$competitor2":"YMG"
                },
                "competitor_id":2168927,
                "competitor":"YMG"
             }
          ],
          "scheduled_at":"2024-01-12T08:00:00.000000Z",
          "updated_at":"2024-01-11T04:32:04.000000Z",
          "tournament":"Galaxy Cup"
       },
       {
          "id":22617443,
          "outcomes":[
             {
                "id":57005043,
                "name":"Seight",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":2.27,
                "specifiers":{
                   "$competitor1":"Seight"
                },
                "competitor_id":2169187,
                "competitor":"Seight"
             },
             {
                "id":57005044,
                "name":"REMBAZA",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.55,
                "specifiers":{
                   "$competitor2":"REMBAZA"
                },
                "competitor_id":2169188,
                "competitor":"REMBAZA"
             }
          ],
          "scheduled_at":"2024-01-12T09:00:00.000000Z",
          "updated_at":"2024-01-11T08:09:11.000000Z",
          "tournament":"ESPORTS BATTLE"
       },
       {
          "id":22620770,
          "outcomes":[
             {
                "id":57013875,
                "name":"Astralis Talent",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.49,
                "specifiers":{
                   "$competitor1":"Astralis Talent"
                },
                "competitor_id":2167847,
                "competitor":"Astralis Talent"
             },
             {
                "id":57013876,
                "name":"Nexus",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":2.39,
                "specifiers":{
                   "$competitor2":"Nexus"
                },
                "competitor_id":2167848,
                "competitor":"Nexus"
             }
          ],
          "scheduled_at":"2024-01-12T09:15:00.000000Z",
          "updated_at":"2024-01-11T09:26:51.000000Z",
          "tournament":"European Pro League Division 2"
       },
       {
          "id":22627745,
          "outcomes":[
             {
                "id":57031672,
                "name":"Tundra",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.81,
                "specifiers":{
                   "$competitor1":"Tundra"
                },
                "competitor_id":2169864,
                "competitor":"Tundra"
             },
             {
                "id":57031673,
                "name":"Entity",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.95,
                "specifiers":{
                   "$competitor2":"Entity"
                },
                "competitor_id":2169865,
                "competitor":"Entity"
             }
          ],
          "scheduled_at":"2024-01-12T10:00:00.000000Z",
          "updated_at":"2024-01-11T15:42:52.000000Z",
          "tournament":"BB Dacha West Europe Qualifier"
       },
       {
          "id":22617445,
          "outcomes":[
             {
                "id":57005047,
                "name":"Purple Haze",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.84,
                "specifiers":{
                   "$competitor1":"Purple Haze"
                },
                "competitor_id":2169189,
                "competitor":"Purple Haze"
             },
             {
                "id":57005048,
                "name":"Gameinside",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.84,
                "specifiers":{
                   "$competitor2":"Gameinside"
                },
                "competitor_id":2169190,
                "competitor":"Gameinside"
             }
          ],
          "scheduled_at":"2024-01-12T12:00:00.000000Z",
          "updated_at":"2024-01-11T08:09:15.000000Z",
          "tournament":"ESPORTS BATTLE"
       },
       {
          "id":22459360,
          "outcomes":[
             {
                "id":56657995,
                "name":"Apeks",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.31,
                "specifiers":{
                   "$competitor1":"Apeks"
                },
                "competitor_id":2159049,
                "competitor":"Apeks"
             },
             {
                "id":56657996,
                "name":"NASR",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":3.11,
                "specifiers":{
                   "$competitor2":"NASR"
                },
                "competitor_id":2159050,
                "competitor":"NASR"
             }
          ],
          "scheduled_at":"2024-01-12T13:00:00.000000Z",
          "updated_at":"2024-01-06T16:56:45.000000Z",
          "tournament":"Superdome Egypt"
       },
       {
          "id":22459371,
          "outcomes":[
             {
                "id":56658017,
                "name":"Apeks",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.34,
                "specifiers":{
                   "$competitor1":"Apeks"
                },
                "competitor_id":2159051,
                "competitor":"Apeks"
             },
             {
                "id":56658018,
                "name":"Falcons",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":2.91,
                "specifiers":{
                   "$competitor2":"Falcons"
                },
                "competitor_id":2159052,
                "competitor":"Falcons"
             }
          ],
          "scheduled_at":"2024-01-12T14:00:00.000000Z",
          "updated_at":"2024-01-06T16:25:12.000000Z",
          "tournament":"Superdome Egypt"
       },
       {
          "id":22617447,
          "outcomes":[
             {
                "id":57005051,
                "name":"Gameinside",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.84,
                "specifiers":{
                   "$competitor1":"Gameinside"
                },
                "competitor_id":2169191,
                "competitor":"Gameinside"
             },
             {
                "id":57005052,
                "name":"Purple Haze",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.84,
                "specifiers":{
                   "$competitor2":"Purple Haze"
                },
                "competitor_id":2169192,
                "competitor":"Purple Haze"
             }
          ],
          "scheduled_at":"2024-01-12T15:00:00.000000Z",
          "updated_at":"2024-01-11T08:09:17.000000Z",
          "tournament":"ESPORTS BATTLE"
       },
       {
          "id":22459375,
          "outcomes":[
             {
                "id":56658025,
                "name":"Falcons",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":3.44,
                "specifiers":{
                   "$competitor1":"Falcons"
                },
                "competitor_id":2159053,
                "competitor":"Falcons"
             },
             {
                "id":56658026,
                "name":"BBL",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.24,
                "specifiers":{
                   "$competitor2":"BBL"
                },
                "competitor_id":2159054,
                "competitor":"BBL"
             }
          ],
          "scheduled_at":"2024-01-12T15:00:00.000000Z",
          "updated_at":"2024-01-06T16:57:23.000000Z",
          "tournament":"Superdome Egypt"
       },
       {
          "id":22459383,
          "outcomes":[
             {
                "id":56658041,
                "name":"Falcons",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.65,
                "specifiers":{
                   "$competitor1":"Falcons"
                },
                "competitor_id":2159055,
                "competitor":"Falcons"
             },
             {
                "id":56658042,
                "name":"NASR",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":2.08,
                "specifiers":{
                   "$competitor2":"NASR"
                },
                "competitor_id":2159056,
                "competitor":"NASR"
             }
          ],
          "scheduled_at":"2024-01-12T16:00:00.000000Z",
          "updated_at":"2024-01-06T16:56:13.000000Z",
          "tournament":"Superdome Egypt"
       },
       {
          "id":22439360,
          "outcomes":[
             {
                "id":56614057,
                "name":"G Who",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":2.03,
                "specifiers":{
                   "$competitor1":"G Who"
                },
                "competitor_id":2159256,
                "competitor":"G Who"
             },
             {
                "id":56614058,
                "name":"SONS OF PETAH",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.69,
                "specifiers":{
                   "$competitor2":"SONS OF PETAH"
                },
                "competitor_id":2159257,
                "competitor":"SONS OF PETAH"
             }
          ],
          "scheduled_at":"2024-01-12T17:00:00.000000Z",
          "updated_at":"2024-01-09T22:33:54.000000Z",
          "tournament":"South Breach"
       },
       {
          "id":22459389,
          "outcomes":[
             {
                "id":56658053,
                "name":"BBL",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":1.19,
                "specifiers":{
                   "$competitor1":"BBL"
                },
                "competitor_id":2159057,
                "competitor":"BBL"
             },
             {
                "id":56658054,
                "name":"NASR",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":4.09,
                "specifiers":{
                   "$competitor2":"NASR"
                },
                "competitor_id":2159058,
                "competitor":"NASR"
             }
          ],
          "scheduled_at":"2024-01-12T17:00:00.000000Z",
          "updated_at":"2024-01-06T16:26:02.000000Z",
          "tournament":"Superdome Egypt"
       },
       {
          "id":22459392,
          "outcomes":[
             {
                "id":56658059,
                "name":"BBL",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":2.17,
                "specifiers":{
                   "$competitor1":"BBL"
                },
                "competitor_id":2159059,
                "competitor":"BBL"
             },
             {
                "id":56658060,
                "name":"Apeks",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.6,
                "specifiers":{
                   "$competitor2":"Apeks"
                },
                "competitor_id":2159060,
                "competitor":"Apeks"
             }
          ],
          "scheduled_at":"2024-01-12T18:00:00.000000Z",
          "updated_at":"2024-01-06T16:26:18.000000Z",
          "tournament":"Superdome Egypt"
       },
       {
          "id":22510472,
          "outcomes":[
             {
                "id":56765669,
                "name":"Valor",
                "name_unparsed":"{$competitor1}",
                "abbreviation":null,
                "odds":2.87,
                "specifiers":{
                   "$competitor1":"Valor"
                },
                "competitor_id":2161981,
                "competitor":"Valor"
             },
             {
                "id":56765670,
                "name":"Secret",
                "name_unparsed":"{$competitor2}",
                "abbreviation":null,
                "odds":1.35,
                "specifiers":{
                   "$competitor2":"Secret"
                },
                "competitor_id":2161982,
                "competitor":"Secret"
             }
          ],
          "scheduled_at":"2024-01-12T19:00:00.000000Z",
          "updated_at":"2024-01-07T14:29:44.000000Z",
          "tournament":"South Breach"
       }
    ]
  }
];

export function Home(){

   const navigation = useNavigation();

   const route = useRoute<RouteProp<ParamListHome, 'Home'>>();

   const action = route.params?.action;

   const [pendingBets, setPendingBets] = useState<BetPendingItemProps[]>([]);

   const counterPendingBets = (data:BetPendingItemProps) => {
     
      let update = [];

      const find = pendingBets.find(item => item.marketId === data.marketId && item.winnerId === data.winnerId);

      if(find === undefined){
         update = [...pendingBets,data];   
      }else{
        update = pendingBets.filter(item => item.winnerId !== data.winnerId);
        
      }
      setPendingBets(update);   
   }
   
   const renderItem = ({ item }: { item: MarketItemProps }) => {
     return <MarketItem  item={item} handleClick={counterPendingBets} />
   };

   const goToPendingBetsDetails = () =>{
      navigation.navigate('PendingBetsDetails', {
         pending: pendingBets,
      });
   }

   useFocusEffect(
      useCallback(() => {
         if(action !== undefined && action === 'reset'){
            setPendingBets([]);
         }
      }, [action])
    );

  return (
      <Container>
         <WrapBetsPending onPress={()=>goToPendingBetsDetails()}>
            <BetsPendingText>
               Pending Bets
            </BetsPendingText>
            <WrapQuantity>
               <BetsPendingTextQuantity>
                  {pendingBets.length}
               </BetsPendingTextQuantity>
            </WrapQuantity>
         </WrapBetsPending>
          <MarketList
              data={data[0].markets}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
          />
      </Container>  
      );
}