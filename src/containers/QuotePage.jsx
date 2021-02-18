import React from 'react';
import Quote from '../quotes/Quote';
import { useQuote } from '../hooks/quote';


const QuotePage = () => {
  const { loading, quote } = useQuote();

  if(loading) return <h1>Loading</h1>;
  return <Quote {...quote} />;
};

export default QuotePage;

