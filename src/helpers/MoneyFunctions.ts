

import { Platform } from 'react-native';

  export const FormatReal = (price: number) => {
    const parsedPrice =  price .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    return Platform.OS === 'android' ? `R$ ${parsedPrice.toFixed(2) }` : parsedPrice;
 };

 export const FormatUSD = (price: number) => {
  const parsedPrice =  price .toLocaleString("en-US", {style:"currency", currency:"USD"});
  return parsedPrice.toFixed(2);
};
 
 