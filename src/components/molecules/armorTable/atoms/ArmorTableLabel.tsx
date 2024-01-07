import {useState, useEffect, useContext} from 'react';
import {ThemeContext} from "../../../contexts/themeContext";

interface Props {
    monster: string;
}

export const ArmorTableLabel = ({monster}: Props) => {
    const {theme} = useContext(ThemeContext);
    const [monsterIcon, setMonsterIcon] = useState('');

    useEffect(() => {
        import(`../../../../assets/monsties/${monster}.png`).then((r)=>{
            setMonsterIcon(r.default)
        }).catch(() => import(`../../../../assets/theme/${theme}/ItemIcon060.png`).then((r)=>{
            setMonsterIcon(r.default)}))
    }, [setMonsterIcon, monster, theme])

    return <div className='armorTableCell'>
        <img src={monsterIcon} alt={`${monster}-icon`}/>
        {monster} set
    </div>
}