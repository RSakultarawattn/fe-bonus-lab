import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import quote from '../components/app/fixtures/CharacterQuote.json';
import QuotePage from './QuotePage';
global.fetch = require('node-fetch');

const server = setupServer (
  rest.get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote',
    (req, res, ctx) => {
      return res(ctx.json(quote));
    })
);

describe('QuotePage container', () => {
  act(async() => {beforeAll(() => server.listen());
    afterAll(() => server.close());
  });
  
  it('displays a character quote', async() => {
    
    await act(async() => {
      
      render(
      
        <QuotePage />
      );

    });

    

    screen.getByText('Loading');

    
    
    return waitFor(() => {
      
      screen.getByText('Chewie, we’re home. — Han Solo');
      

      
     
      
    });
  });
});
