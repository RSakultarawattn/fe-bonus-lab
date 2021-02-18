import React from 'react';
import QuotePage from '../../containers/QuotePage';
import './App.css';

export default function App() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <QuotePage />
   
      <button onClick={refreshPage}>Click to get a new quote!</button>
    </div>
    
  );
}