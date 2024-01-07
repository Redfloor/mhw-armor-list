import {useContext} from "react";
import {FilterContext} from "../../contexts/filterContext";
import {ArmorTableRow} from "./atoms/ArmorTableRow";
import {ArmorTableHeader} from "./atoms/ArmorTableHeader";
import {buildFilteredArmorList} from "./helpers";

export const ArmorTable = () => {
    const {filter} = useContext(FilterContext)
    const armorList = buildFilteredArmorList(filter)
    const rows = armorList.map(al => <ArmorTableRow {...al} key={`row: ${al.set}`} />)

    return <div className='armorTable'>
        <ArmorTableHeader />
        {rows}
    </div>
}