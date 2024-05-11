import Header from '../Header/Header';
import Notes from '../Notes/Notes';
import { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext.js';

function App() {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeContext.theme);
  const themeContextValue = { theme, setTheme};

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={theme}>
        <Header />
        <Notes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
