import * as React from 'react'
import './App.css';
import {ArmorTable} from './components/molecules/armorTable/ArmorTable';
import {Filter} from "./components/molecules/filter/filter";
import {ThemeContextProvider} from "./components/contexts/themeContext";
import {ThemePicker} from "./components/atoms/ThemePicker";
import {FilterContextProvider} from "./components/contexts/filterContext";

function App() {
  return (
      <ThemeContextProvider>
          <FilterContextProvider>
            <div className="App">
              <header className="App-header">
                  <ThemePicker />
                  Monster Item Skills
                  <Filter />
              </header>
                <ArmorTable />
            </div>
          </FilterContextProvider>
      </ThemeContextProvider>
  );
}

export default App;
