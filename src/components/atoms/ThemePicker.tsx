import {useContext} from "react";
import {ThemeContext} from "../contexts/themeContext";

import theme0 from '../../assets/theme/default/ItemIcon025.png'
import themea from '../../assets/theme/red/ItemIcon025.png'
import themeb from '../../assets/theme/green/ItemIcon025.png'
import themec from '../../assets/theme/purple/ItemIcon025.png'
import themed from '../../assets/theme/orange/ItemIcon025.png'
import themee from '../../assets/theme/blue/ItemIcon025.png'
import themef from '../../assets/theme/yellow/ItemIcon025.png'
import themeh from '../../assets/theme/dark/ItemIcon025.png'


export const ThemePicker = () => {
    const {setTheme} = useContext(ThemeContext)
    const updateTheme = (theme: string) => {
        setTheme(theme);
    }


    return <div className='themePicker'>
        <div>Theme:</div>
        <img src={theme0} alt='default theme' onClick={()=>updateTheme('default')}/>
        <img src={themea} alt='red theme' onClick={()=>updateTheme('red')}/>
        <img src={themeb} alt='green theme' onClick={()=>updateTheme('green')}/>
        <img src={themec} alt='purple theme' onClick={()=>updateTheme('purple')}/>
        <img src={themed} alt='orange theme' onClick={()=>updateTheme('orange')}/>
        <img src={themee} alt='blue theme' onClick={()=>updateTheme('blue')}/>
        <img src={themef} alt='yellow theme' onClick={()=>updateTheme('yellow')}/>
        <img src={themeh} alt='dark theme' onClick={()=>updateTheme('dark')}/>
    </div>
}