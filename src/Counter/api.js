/**
 * 
 * @param {Number} counter 
 * @returns Counter State Incremented by 1
 */
export const incrementApi = (counter = 0) => {
  return counter + 1;
}

/**
 * 
 * @param {Number} counter 
 * @returns Counter State decremented by 1
 */
export const decrementApi = (counter = 0) => {
  return counter < 1 ? 0 : counter - 1;
}



/**
 * Load the initial count
 * @returns 0
 */
export const load = () => {
  return 0;
}