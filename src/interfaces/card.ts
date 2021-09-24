//export type CardType = 'rpg' | 'shoot' | 'retro' | 'sandbox';

/*export enum CardKind{
    rpg = "Role Playing Games", 
    shoot = "Shooters", 
    retro = "Old Games", 
    sandbox = "Building/Open World"
}*/
export interface Card{
    id: number
    kind: string
    prompt: string
    answer: string
    hint: string
}
