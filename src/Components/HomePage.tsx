import Header from './Generic/Header';
import Content from './Generic/Content'
import '../Assets/home.css';
import schizoData from '../Data/schizo.json'


const HomePage = () => {
    const WhatIsSchizophrenia = Header.header('What is Schizophrenia?');
    const theSpectrumHeader = Header.subHeader('The Schizophrenia Spectrum');
    const theSpectrumContent = Content.content(schizoData.theSpectrum);
    const MoodDisorderWithPsychoticFeaturesHeader = Header.subHeader('Mood Disorder With Psychotic Features');
    const MoodDisorderWithPsychoticFeaturesContent = Content.content(schizoData.MoodDisorerWithPsychoticFeatures);
    const SchizoAffectiveHeader = Header.subHeader('Schizoaffective');
    const SchizoAffectiveContent = Content.content(schizoData.SchizoAffectiveDisorder);
    const SchizophreniaHeader = Header.subHeader('Schizophrenia');
    const SchizophreniaContent = Content.content(schizoData.Schizophrenia);
    const AffinityHeader = Header.header('Affinity of Schizophrenia');
    return ( 
        <div className='HomePage'>
            {WhatIsSchizophrenia}
            {theSpectrumHeader}
            {theSpectrumContent}
            {MoodDisorderWithPsychoticFeaturesHeader}
            {MoodDisorderWithPsychoticFeaturesContent}
            {SchizoAffectiveHeader}
            {SchizoAffectiveContent}
            {SchizophreniaHeader}
            {SchizophreniaContent}
            {AffinityHeader}
        </div>
    );
}

export {
    HomePage
}