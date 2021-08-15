import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import Label from './label';
import Images from '../services/images';

describe('Label', () => {
  const labelTestId = "label-text";

  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  describe('Render Label with various labelText values', () => {
    test('Console error when rendering Label without labelText', async () => {
      render(<Label />);

      sinon.assert.called(console.error);
    });

    test('Renders Label with string', async () => {
      const labelText = "Test label text";

      render(<Label labelText={labelText}/>);

      expect(screen.queryByText(labelText)).toBeInTheDocument();
      sinon.assert.notCalled(console.error);
    });

    test('Console error when rendering Label with null', async () => {
      const labelText = null;

      render(<Label labelText={labelText}/>);

      sinon.assert.called(console.error);
    });

    test('Renders Label with empty string', async () => {
      const labelText = "";

      render(<Label labelText={labelText}/>);

      sinon.assert.notCalled(console.error);
    });
  });
});
