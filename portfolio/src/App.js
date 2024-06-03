import './App.css';
import { MenuContext } from './MenuContext';
import { MenuOptions } from './MenuOptions';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect, useRef } from 'react';

function App() {
  const observerRef = useRef();
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuActive, setMenuActive] = useState(MenuOptions[0]);
  const menuContextObj = {menuActive, setMenuActive, setMenuClicked};
  const timeout = 150;
  const options = {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  };

  function showElement(elem, timeout) {
      setTimeout(() => {
          elem.classList.add('show');
      }, timeout);
  }

  function callback(entries) {
    // only set the menu for that section which is intersecting, but if there are more intersecting don't do anything
    // this avoids the blinking effect when two sections are intersecting within the viewport
    const sectionsIntersecting = entries.filter(entry => entry.isIntersecting);
    const section = sectionsIntersecting?.length > 1 ? null : sectionsIntersecting[0];

    if (!!section){           
      let elem = section.target;
      const children = document.querySelectorAll(`#${elem.id} .item-fade`);
      children?.forEach((child, index) => {
        if (!child.classList.contains('show')){
            const delay = timeout * (index + 1);
            showElement(child, delay);
        }
      });

      const currentMenuIstheTarget = menuActive === section.target.id;        
      if (!menuClicked && !currentMenuIstheTarget){
        setMenuActive(section.target.id);
      } else if (currentMenuIstheTarget){
        setMenuClicked(false);
      }
    }
  };
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, options);
    MenuOptions.forEach((entry) => {
      observerRef.current.observe(document.querySelector(`#${entry}`));
    });
    // Clean up observers
    return () => {
      MenuOptions.forEach((entry) => {
        observerRef.current.unobserve(document.querySelector(`#${entry}`));
      });
    };
    // it has to be exected every render so the callback can take the latest value of the menu active
    // otherwise the menuActive in the callback function will see oinly the first state value
  }); 

  return (
    <MenuContext.Provider value={menuContextObj}>
        <Header></Header>
        <Main></Main>
    </MenuContext.Provider>
  );
}

export default App;
