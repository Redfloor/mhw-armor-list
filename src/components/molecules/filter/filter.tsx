import {useContext, useState} from 'react';
import {armorList} from "../../../data/armors";
import {buildAbilityList} from "./helpers";
import {FaCaretDown} from 'react-icons/fa6'
import {FilterContext} from "../../contexts/filterContext";

export const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {filter, setFilter} = useContext(FilterContext)

    const abilityList = buildAbilityList(armorList);

    const TopLine = () => {
        return <div className='fitlerTopline' onClick={() => setIsOpen(!isOpen)} >
            {filter == '' ? 'Select an ability' : filter}
            <FaCaretDown />
        </div>
    }

    const Select = () => {
        return <>
            <div className='modalClickArea' onClick={
                () => {
                    setIsOpen(false)
                }
            }/>
            <div className='filterContainer'>
            {
                abilityList.map(al => <div className='filterSelect' onClick={
                    () => {
                        al === filter ? setFilter('') : setFilter(al);
                        setIsOpen(false);
                    }
                }>{al}</div>)
            }
            </div>
        </>
    }

    return <div className='filter'>
        <TopLine />
        {isOpen && <Select />}
    </div>
}