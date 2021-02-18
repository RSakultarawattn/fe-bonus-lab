import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Quote from './Quote';

describe('displays a quote', () => {
  afterEach(() => cleanup());
  it('renders one single quote', () => {
    const { asFragment } = render(<Quote 
      content="" faction="" id="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
