import {useContext} from "react";
import {ThemeContext} from "../../../contexts/themeContext";

export const ArmorTableHeader = () => {
    const {theme} = useContext(ThemeContext);
    const headImg = require(`../../../../assets/theme/${theme}/armorIcons/ItemIcon002.png`);
    const chestImg = require(`../../../../assets/theme/${theme}/armorIcons/ItemIcon037.png`);
    const glovesImg = require(`../../../../assets/theme/${theme}/armorIcons/ItemIcon013.png`);
    const beltImg = require(`../../../../assets/theme/${theme}/armorIcons/ItemIcon018.png`);
    const greavesImg = require(`../../../../assets/theme/${theme}/armorIcons/ItemIcon010.png`);
    const weaponImg = require(`../../../../assets/theme/${theme}/ItemIcon034.png`);
    return <div className='armorTableHeader'>
        <div key='header-label'>Brought to you by RedWaltz</div>
        <div key='header-head'>
            <img src={headImg} alt={'head slot'}/>
        </div>
        <div key='header-chest'>
            <img src={chestImg} alt={'chest slot'}/>
        </div>
        <div key='header-gloves'>
            <img src={glovesImg} alt={'gloves slot'}/>
        </div>
        <div key='header-belt'>
            <img src={beltImg} alt={'belt slot'}/>
        </div>
        <div key='header-greaves'>
            <img src={greavesImg} alt={'greaves slot'}/>
        </div>
        <div key='header-weapons'>
            <img src={weaponImg} alt={'weapons slot'}/>
        </div>
    </div>
}