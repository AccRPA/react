import { useEffect } from 'react';
import './App.css';
import { MenuContext } from './MenuContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useContext } from 'react';
import { MenuOptions } from './MenuOptions';

function App() {
  const menuContext = useContext(MenuContext);
  const [menuSelected, setMenuSelected] = useState(menuContext.menuSelected);
  const menuHeader = {menuSelected, setMenuSelected};
  const headerHeight = 50;

  useEffect(() => {
    const arrayMenuOffTop = MenuOptions.reduce((accumulator, option) => {
      const offTop = document.getElementById(option).offsetTop;
      accumulator.push({
        option,
        offTop
      });
      return accumulator;
    }, []);

    const handleScroll = () => {
      const scrollTop = window.scrollY + headerHeight;
      console.log(scrollTop);
      const menuToSelect = arrayMenuOffTop
      // get the manus less than the scroll position
      .filter(menu => menu.offTop < scrollTop)
      // get the closest one to the scroll position
      ?.reduce((accumulator, item) =>  item.offTop > accumulator.offTop ? item : accumulator, arrayMenuOffTop[0]);

      if(menuToSelect.option !== menuSelected){
        setMenuSelected(menuToSelect.option);
      }
    };

    // remove previous listener added
    window.removeEventListener('scroll', handleScroll, { passive: true });

    console.log(`${arrayMenuOffTop.reduce((accumulator, item) => accumulator + `; option: ${item.option} - value: ${item.offTop}`, '')}`);

    // add a new listener until the menu changes and the effect will execute again
    window.addEventListener('scroll', handleScroll, { passive: true });
  },[menuSelected]);

  return (
    <MenuContext.Provider value={menuHeader}>
        <Header></Header>
        <Main></Main>
    </MenuContext.Provider>
  );
}

export default App;
