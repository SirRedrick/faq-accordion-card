import React from 'react';
import './App.css';
import Card from './components/Card';
import FaqList from './components/FaqList';
import faqData from './data/faq-data';

const App = () => (
  <div className="container">
    <Card title="FAQ">
      <FaqList data={faqData} />
    </Card>
  </div>
);

export default App;
