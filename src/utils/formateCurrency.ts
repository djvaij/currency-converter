import { ICurrencyItem } from '../types';
import { ICurrencyObject } from '../types';

// Filter only needed currency data and convert it from array to object.
export const formatCurrency = (array: ICurrencyItem[]): ICurrencyObject => {
  let filteredArray = array.filter(el => el.cc === 'USD' || el.cc === 'EUR');
  return filteredArray.reduce((a, obj) => ({ ...a, [obj.cc]: obj }), {});
};
