import Header from './Generic/Header';
import Content from './Generic/Content'
import '../Assets/home.css';
import schizoData from '../Data/schizo.json'
import Conditions from './Conditions';
import ConditionsCards from './ConditionsCards';

import { Grid } from './Generic/Grid';


const HomePage = () => {
    const WhatIsSchizophrenia = Header.header('What is Schizophrenia?');
    const theSpectrumHeader = Header.subHeader('The Schizophrenia Spectrum');
    const theSpectrumContent = Content.content(schizoData.theSpectrum);
    const SchizoAffectiveHeader = Header.subHeader('Schizoaffective');
    const SchizoAffectiveContent = Content.content(schizoData.SchizoAffectiveDisorder);
    const SchizophreniaHeader = Header.subHeader('Schizophrenia');
    const SchizophreniaContent = Content.content(schizoData.Schizophrenia);
    const PrevalenceHeader = Header.header('Prevalence of Schizophrenia');
    const generalPercentage = Header.subHeader(' the schizophrenia spectrum disorders collectively affect around 1% to 3% of the population.');
    const conditions = Grid(ConditionsCards.conditions([...Conditions.conditionList(schizoData.Spectrum)]), 4);
    return ( 
        <div className='SchizophreniaInfoDiv'>
    <div className="SchizophreniaInfoHeader">
        {WhatIsSchizophrenia}
    </div>
    <div className="SpectrumHeader">
        {theSpectrumHeader}
    </div>
    <div className="SpectrumContent">
        {theSpectrumContent}
    </div>

    <div className="Conditions">
        {conditions}
    </div>
    <div className="SchizoAffectiveHeader">
        {SchizoAffectiveHeader}
    </div>
    <div className="SchizoAffectiveContent">
        {SchizoAffectiveContent}
    </div>
    <div className="SchizophreniaHeader">
        {SchizophreniaHeader}
    </div>
    <div className="SchizophreniaContent">
        {SchizophreniaContent}
    </div>
    <div className="PrevalenceHeader">
        {PrevalenceHeader}
    </div>
    <div className="GeneralPercentage">
        {generalPercentage}
    </div>
  
</div>

            
    );
}

export {
    HomePage
}