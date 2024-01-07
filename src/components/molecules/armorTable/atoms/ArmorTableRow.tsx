import * as React from 'react';
import {setType} from "../../../../types";
import {ArmorTableCell} from "./ArmorTableCell";
import {ArmorTableLabel} from "./ArmorTableLabel";

export const ArmorTableRow = ({set, armor}: setType) => {
    const head = armor.find(a => a.slot === 'head');
    const chest = armor.find(a => a.slot === 'chest');
    const gloves = armor.find(a => a.slot === 'gloves');
    const belt = armor.find(a => a.slot === 'belt');
    const greaves = armor.find(a => a.slot === 'greaves');

    return <div className='armorRow'>
        <ArmorTableLabel monster={set} />
        <ArmorTableCell abilities={head?.abilities} />
        <ArmorTableCell abilities={chest?.abilities} />
        <ArmorTableCell abilities={gloves?.abilities} />
        <ArmorTableCell abilities={belt?.abilities} />
        <ArmorTableCell abilities={greaves?.abilities} />
    </div>
}