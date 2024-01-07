import {setType} from "../../types";

export const pukei: setType = {
    set: 'pukei',
        armor: [
    {
        slot: 'head',
        abilities: [{
            name: 'focus',
            level: 1,
            grade: 2,
        }, {
            name: 'health boost',
            level: 2,
            grade: 4,
        }],
    },
    {
        slot: 'chest',
        abilities: [{
            name: 'poison resistance',
            level: 1,
            grade: 2,
            }, {
            name: 'focus',
            level: 1,
            grade: 4,
        }]
        },
    {
        slot: 'gloves',
        abilities: [{
            name: 'poison attack',
            level: 1,
            grade: 2,
    },
        {
            name: 'poison resistance',
            level: 1,
            grade: 4,
        }]
    },
    {
        slot: 'belt',
        abilities: [{
            name: 'poison attack',
            level: 2,
            grade: 2,
        }]
    },
    {
        slot: 'greaves',
        abilities: [{
            name: 'health boost',
            level: 1,
            grade: 2,
        }, {
            name: 'health boost',
            level: 1,
            grade: 4,
        }]
    },
]
}