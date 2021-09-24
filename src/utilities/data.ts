//https://stackoverflow.com/a/5915122
/**
 * Grab a Random Element From a List
 * @param items Any kind of list
 * @returns one randomly chosen element
 */
export function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}

//https://stackoverflow.com/a/2450976
/**
 * shuffles an array in-place
 * @param array Any array of elements
 * @returns The same array, shuffled ( modified in place)
 */
export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}