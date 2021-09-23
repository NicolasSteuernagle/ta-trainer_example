//https://stackoverflow.com/a/5915122
/**
 * Grab a Random Element From a List
 * @param items Any kind of list
 * @returns one randomly chosen element
 */
export function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}