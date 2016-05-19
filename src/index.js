import isArray from 'lodash/isArray';
/**
 * restricts a value to within a set minimum and maximum
 *
 * @param  {number} value - the value to be bound
 * @param  {number|Array} min - the minimum bound or an array
 *   containing both values
 * @param  {number} max - the maximum bound
 *
 * @return {number} - the value, or the min/max as appropriate
 */
export default function bindValueToRange(value, min, max) {
  // array overloading
  const range = isArray(min) ? min : [ min, max ];

  // if the 'min' is larger than the 'max', this will be false,
  // and the values will be reversed in the return statement
  const order = range[1] > range[0];
  return Math.max(range[Number(!order)], Math.min(range[Number(order)], value));
}
