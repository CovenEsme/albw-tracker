import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  test('Renders App with loading spinner while initializing', () => {
    render(<App />);

    expect(screen.getByLabelText('audio-loading')).toBeInTheDocument();
    expect(screen.queryByAltText('Gear overlay')).toBeNull();
    expect(screen.queryByAltText('Items overlay')).toBeNull();
    expect(screen.queryByAltText('Label')).toBeNull();
    sinon.assert.notCalled(console.error);
  });

  test('Renders App with tracker after initializing', async () => {
    render(<App />);

    expect(screen.getByLabelText('audio-loading')).toBeInTheDocument();

    expect(await screen.findByAltText('Gear overlay')).toBeInTheDocument();
    expect(screen.getByAltText('Items overlay')).toBeInTheDocument();
    expect(screen.getByAltText('Label')).toBeInTheDocument();
    sinon.assert.notCalled(console.error);
  });
});
