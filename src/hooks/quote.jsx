import { useState, useEffect } from 'react';
import { getQuote } from '../services/quoteApi';

export const useQuote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote]  = useState([]);

  useEffect(() => {
    getQuote()
      .then(quote => {
        setQuote(quote);
        setLoading(false);
      });
  }, []);


  return {
    loading,
    quote
  };
};