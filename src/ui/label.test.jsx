import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import Images from '../services/images';
import Label from './label';

describe('Label', () => {
  const labelTestId = "label-text";

  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  describe('Render Label with various labelText values', () => {
    test('Console error rendering Label without labelText', () => {
      render(<Label />);

      sinon.assert.called(console.error);
    });

    test('Renders Label with string', () => {
      const testLabelText = "Test label text";

      render(<Label labelText={testLabelText}/>);

      expect(screen.getByText(testLabelText)).toBeInTheDocument();
      sinon.assert.notCalled(console.error);
    });

    test('Console error rendering Label with null', () => {
      const testLabelText = null;

      render(<Label labelText={testLabelText}/>);

      sinon.assert.called(console.error);
    });

    test('Renders Label with empty string', () => {
      const testLabelText = "";

      render(<Label labelText={testLabelText}/>);

      expect(screen.getByTestId(labelTestId)).toBeInTheDocument();
      sinon.assert.notCalled(console.error);
    });
  });

  describe('Render Label image', () => {
    test('Renders Label image', async () => {
      await Images.importImages();

      render(<Label labelText="Test"/>);

      const testLabelImage = await screen.findByRole('img');
      expect(testLabelImage).toHaveAttribute('src', 'gear-label.png');
      sinon.assert.notCalled(console.error);
    });
  });
});
