import React, { useState } from 'react';
import './Assets/App.css';
import { Nav } from './Components/Generic/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from './Components/Generic/Footer';
import { heading } from './Components/Generic/Titles';
import { Grid } from './Components/Generic/Grid';

import {HomePage} from './Components/HomePage'
import { LoginPage } from './Components/LoginPage';
import { GoalPage } from './Components/GoalPage';
import { SymptomsAndStrategiesPage } from './Components/SymptomsAndStrategiesPage';
import { ArticlesPage } from './Components/ArticlesPage';
import { MedReviewPage } from './Components/MedReviewPage';
import { UrgentHelpPage } from './Components/UrgentHelpPage';
import { Symptom } from './Components/SymptomList';
import { JournalPage } from'./Components/JournalPage';


const home = Nav.Home();
const goal = Nav.Menu('/goal', 'Goal')
const login = Nav.Menu('/login', "Login")

const journal = Nav.Menu('/journal', 'Journal');
const articles = Nav.Menu ('/articles', 'Articles')
const medReview = Nav.Menu('/MedReview', 'Med Review')
const urgentHelp = Nav.Menu('/UrgentHelp', 'Urgent Help')
const symptomsAndStrategies = Nav.MenuLong('/SymptomsAndStrategies', 'Symptoms And Strategies')

const headerNav = Nav.Bar([login, goal]);
const footerNav = Footer.nav(Nav.Bar([symptomsAndStrategies, journal, home , articles, medReview, urgentHelp]));
//const footerNav = Footer.nav(Nav.Bar([symptomsAndStrategies, journal, home, articles, medReview, urgentHelp]))

const schizoGroup = Nav.link("https://www.facebook.com/groups/1544865272418437", "schizoaffective support group");
const title = heading("SZafeArea");
const header = Grid([title, headerNav])

interface Props {
  toSearch: string;
  setToSearch: React.Dispatch<React.SetStateAction<string>>;
  toStore: Symptom[];
  setToStore: React.Dispatch<React.SetStateAction<Symptom[]>>;
  keyValue: Symptom;
  setKey:  React.Dispatch<React.SetStateAction<Symptom>>;
}

const  App:React.FC = () => {
  console.log("app running")
  const [toSearch, setToSearch]= useState<string>("");
  let [toStore, setToStore] = useState<Symptom[]>([]);

  
  return (


  <div className="App">
   {header}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/journal' element={<JournalPage/>} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/SymptomsAndStrategies" element={<SymptomsAndStrategiesPage toSearch={toSearch} toStore={toStore} setToSearch={setToSearch} setToStore={setToStore}/>}/>
        <Route path="/MedReview" element={<MedReviewPage />} />
        <Route path='/UrgentHelp' element={<UrgentHelpPage/>} />
        <Route path="/login" element= {<LoginPage/>}/>
        <Route path='/Goal' element={<GoalPage/>}/>
      </Routes>
    </Router>
    {footerNav}
  </div>


)}


export default App;
