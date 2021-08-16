import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import Images from '../services/images';
import Obtainable from './obtainable';

describe('Obtainable', () => {
  const testObtainableName      = "Test Obtainable";
  const testObtainableFancyName = "Test Obtainable Fancy";
  const testObtainableImage     = "test-obtainable.png";

  const testFunction = () => {};

  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  test('Console error rendering Obtainable without props', () => {
    render(<Obtainable />);

    sinon.assert.called(console.error);
  });

  test('Renders Obtainable with fancy name', () => {
    render(<Obtainable
             obtainableName={testObtainableName}
             obtainableFancyName={testObtainableFancyName}
             obtainableImage={testObtainableImage}
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
           />);

    expect(screen.getByAltText(testObtainableFancyName)).toBeInTheDocument();
    sinon.assert.notCalled(console.error);
  });

  test('Renders Obtainable image', async () => {
    await Images.importImages();

    render(<Obtainable
             obtainableName={testObtainableName}
             obtainableFancyName=""
             obtainableImage={Images.getImage('Progressive Sword', 0)}
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
           />);

    const testObtainableImage = await screen.findByRole('img');
    expect(testObtainableImage).toHaveAttribute('src', 'sword-0.png');
    sinon.assert.notCalled(console.error);
  });
});
