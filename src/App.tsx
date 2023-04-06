import React from 'react';
import './Assets/App.css';
import { Nav } from './Components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from './Components/Footer';
import { heading } from './Components/Titles';
import { Grid } from './Components/Grid';

import {HomePage} from './Components/HomePage'
import { LoginPage } from './Components/LoginPage';
import { GoalPage } from './Components/GoalPage';
import { SymptomsAndStrategiesPage } from './Components/SymptomsAndStrategiesPage';
import { ArticlesPage } from './Components/ArticlesPage';
import { MedReviewPage } from './Components/MedReviewPage';
import { UrgentHelpPage } from './Components/UrgentHelpPage';


const home = Nav.Menu('/', "Home");
const goal = Nav.Menu('/goal', 'Goal')
const login = Nav.Menu('/login', "Login")

const articles = Nav.Menu ('/articles', 'Articles')
const medReview = Nav.Menu('/MedReview', 'Med Review')
const urgentHelp = Nav.Menu('/UrgentHelp', 'Urgent Help')
const symptomsAndStrategies = Nav.MenuLong('/SymptomsAndStrategies', 'Symptoms And Strategies')

const headerNav = Nav.Bar([login, goal])
const footerNav = Footer.nav(Nav.Bar([symptomsAndStrategies, articles, home, medReview, urgentHelp]))

const schizoGroup = Nav.link("https://www.facebook.com/groups/1544865272418437", "schizoaffective support group");
const title = heading("SZafeArea");
const header = Grid([title, headerNav])


const  App:React.FC = () => (
  <div className="App">
    {header}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/SymptomsAndStrategies" element={<SymptomsAndStrategiesPage />} />
        <Route path="/MedReview" element={<MedReviewPage />} />
        <Route path='/UrgentHelp' element={<UrgentHelpPage/>} />
        <Route path="/login" element= {<LoginPage/>}/>
        <Route path='/Goal' element={<GoalPage/>}/>
      </Routes>
    </Router>
    {footerNav}






  </div>


)


export default App;
