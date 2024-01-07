export type AbilityType = {
    name: string,
    level: number,
    grade: number
}

export interface ArmorType {
    slot: 'head' | 'chest' | 'gloves' | 'belt' | 'greaves' | 'weapon',
    abilities: AbilityType[],
}

export interface setType {
    set: string,
    armor: ArmorType[]
}