import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="box">
      <div className="content">
          <Header title="My Profile" subtitle="Joseph Anadon"/>

        <div className="tuyok">
          <div className="card">
            <div className="atubangan">
              <ProfileCard img="sunsit.jfif" h2="Sunset 17:45"/>
            </div>
            <div className="likod">
              <ProfileCard h3="Joseph Anadon 19 | Sunset @Home 2025"/>
            </div>
          </div>
        </div>  
          <SkillList/>
          <Footer />
      </div> 
    </div>
  );
}
