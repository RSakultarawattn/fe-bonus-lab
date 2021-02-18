export const getQuote = () => {
  return fetch
  ('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(res => res.json())
    .then(([quote]) => ({
      id: quote.id,
      content: quote.content,
      faction: quote.faction
    }));
};
  
  
