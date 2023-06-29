import React,{useState,useEffect} from 'react';
import './App.css';
import MainContent from './Components/MainContent/MainContent';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [checkboxValue,setCheckBox]=useState(false);
  const [font, setFont] = useState("Sans-Serif")
  const [theme, setTheme] = useState('light');

  const handleFontChange = (event) => {

      setFont(event.target.value)


  }

  const handleCheckChange=(event)=>{
       setCheckBox(event.target.checked)
 
  }

  console.log(checkboxValue);
  console.log(font);

  const toggleTheme = (event) => {

      setCheckBox(event.target.checked)
      console.log(checkboxValue);
  
      if (checkboxValue) {
        setTheme('light');
      } else {
        setTheme('dark')
      }
      /*
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
      */
      console.log(theme)
    };
  
    useEffect(() => {
      document.body.className = theme;
  
    }, [theme]);

  
  return (
    <div className="App">
      <Navbar handleFontChange={handleFontChange} theme={theme} toggleTheme={toggleTheme} />
      <MainContent themeChange={theme} font={font}/>

     
    
    </div>
  );
}

export default App;
