import React from 'react';
import Header from './../components/Header'; 
import List from '../components/List';

const LandingPage: React.FC = () => {
  const dynamicTitle = "F1 React App"
  return (
    <div>
      <Header title={dynamicTitle} />
      <List />
    </div>
  );
};

export default LandingPage;
