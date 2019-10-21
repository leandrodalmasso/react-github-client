// Dependencies
import { format, parseISO } from 'date-fns';

export function getDateString(isoString) {
  return format(parseISO(isoString), 'MM/dd/yy');
}

export function isEmpty(obj) {
  return Object.getOwnPropertyNames(obj).length === 0;
}