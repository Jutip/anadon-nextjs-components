import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="box">
      <div className="content">
          <Header title="My Profile"/>
          <div className="tuyok">
            <div className="tuyoknasad">
              <div className="atubangan">
                <Header subtitle="Joseph Anadon"/>
              </div>
              <div className="likod">
                <Header subtitle="Aged 19"/>
              </div>
            </div>
          </div>
        <div className="card">
          <ProfileCard />
        </div>
          <SkillList/>
          <Footer />
      </div>
    </div>  
  );
}
