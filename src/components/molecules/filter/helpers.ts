import {setType} from "../../../types";

export const buildAbilityList = (data: setType[]) => {
    const output: string[] = [];
    data.forEach(d => {
        d.armor.forEach(a => {
            a.abilities.forEach(ab => {
                if (!output.includes(ab.name)) {
                    output.push(ab.name)
                }
            })
        })
    })
    return output.sort();
}