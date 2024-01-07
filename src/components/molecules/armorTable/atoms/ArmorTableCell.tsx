import {useContext} from "react";
import {AbilityType} from "../../../../types";
import {FilterContext} from "../../../contexts/filterContext";

type Props = {
    abilities: AbilityType[] | undefined
};

export const ArmorTableCell = (props: Props) => {
    const {abilities} = props;
    const {filter} = useContext(FilterContext);
    if (!props || !abilities) {
        return <div className='armorTableCell'/>
    }

    const highlight = abilities.find(a => a.name === filter);

    return <div className={`armorTableCell${highlight ? ' active': ''}`}>
        {abilities.map(a => <div>{a.name}: {a.level}</div>)}
    </div>
}