import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import Images from '../services/images';
import Obtainable from './obtainable';

describe('Obtainable', () => {
  const obtainableName      = "Test Obtainable";
  const obtainableFancyName = "Test Obtainable Fancy";
  const obtainableImage     = "test-obtainable.png";

  const testFunction = () => {};

  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  test('Console error when rendering Obtainable without props', () => {
    render(<Obtainable />);

    sinon.assert.called(console.error);
  });

  test('Renders Obtainable with fancy name', () => {
    render(<Obtainable
             obtainableName={obtainableName}
             obtainableFancyName={obtainableFancyName}
             obtainableImage={obtainableImage}
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
           />);

    expect(screen.queryByAltText(obtainableFancyName)).toBeInTheDocument();
    sinon.assert.notCalled(console.error);
  });

  test('Renders Obtainable image', async () => {
    await Images.importImages();

    render(<Obtainable
             obtainableName={obtainableName}
             obtainableFancyName=""
             obtainableImage={Images.getImage('Progressive Sword', 0)}
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
           />);

    const obtainableImage = await screen.findByRole('img');
    expect(obtainableImage).toHaveAttribute('src', 'sword-0.png');
    sinon.assert.notCalled(console.error);
  });
});
