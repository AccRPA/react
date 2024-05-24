import './App.css';
import { MenuContext } from './MenuContext';
import { MenuOptions } from './MenuOptions';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(MenuOptions[0]);
  const menuContextObj = {menuActive, setMenuActive};
  const observerRef = useRef();
  const timeout = 150;
  const options = {
    rootMargin: '0px',
    threshold: 0.3,
  };

  function showElement(elem, timeout) {
      setTimeout(() => {
          elem.classList.add('show');
      }, timeout);
  }

  function callback(entries) {
    entries.forEach((section) => {
      if (section.isIntersecting){            
        let elem = section.target;
        const children = document.querySelectorAll(`#${elem.id} .item-fade`);
        children?.forEach((child, index) => {
          if (!child.classList.contains('show')){
              const delay = timeout * (index + 1);
              showElement(child, delay);
          }
        });

        setMenuActive(section.target.id);
      }
    });
  };
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, options);
    observerRef.current.observe(document.querySelector('#skills'));
    observerRef.current.observe(document.querySelector('#projects'));
    observerRef.current.observe(document.querySelector('#home'));
    observerRef.current.observe(document.querySelector('#about'));
  }, []);

  return (
    <MenuContext.Provider value={menuContextObj}>
        <Header></Header>
        <Main></Main>
    </MenuContext.Provider>
  );
}

export default App;
