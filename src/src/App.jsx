import './App.css';
import blog from "./json/blog.json"

import { Header } from './components/Header/Header';
import { Technologies } from './components/Technologies/Technologies';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Popup } from './components/Popup/Popup';
import { Nav } from './components/Nav/Nav';
import { Menu } from './components/Menu/Menu';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [popupVisibility, setPopupVisibility] = useState(false)
  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <>
      <Routes>
        <Route path = "/" element = {
          <div className="App">

            {
              popupVisibility
                && <>
                  <Popup setPopupVisibility = {setPopupVisibility} />
                  <style>
                    {`
                      body{
                        overflow: hidden;
                      }
                    `}
                  </style>
                </>
            }
            <Header setPopupVisibility = {setPopupVisibility} />
            <Nav openedMenu = {openedMenu} setOpenedMenu = {setOpenedMenu} />
            <Menu setPopupVisibility = {setPopupVisibility} setOpenedMenu = {setOpenedMenu} openedMenu = {openedMenu} />
            <Technologies />
            <Projects />
            <Footer />
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
