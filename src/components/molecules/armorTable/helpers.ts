import {armorList} from "../../../data/armors";

export const buildFilteredArmorList = (filter: string) => {
    if (filter === '') return armorList;
    return armorList.filter(al => {
        let keep = false;
        al.armor.forEach(a => {
            if (a.abilities.find(ab => ab.name === filter)) {
                keep = true;
            }
        })
        return keep;
    })
}