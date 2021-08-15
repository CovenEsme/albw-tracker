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
    test('Console error when rendering Label without labelText', () => {
      render(<Label />);

      sinon.assert.called(console.error);
    });

    test('Renders Label with string', () => {
      const labelText = "Test label text";

      render(<Label labelText={labelText}/>);

      expect(screen.queryByText(labelText)).toBeInTheDocument();
      sinon.assert.notCalled(console.error);
    });

    test('Console error when rendering Label with null', () => {
      const labelText = null;

      render(<Label labelText={labelText}/>);

      sinon.assert.called(console.error);
    });

    test('Renders Label with empty string', () => {
      const labelText = "";

      render(<Label labelText={labelText}/>);

      expect(screen.queryByTestId(labelTestId)).toBeInTheDocument();
      sinon.assert.notCalled(console.error);
    });
  });

  describe('Render Label image', () => {
    test('Renders Label image', async () => {
      await Images.importImages();

      render(<Label labelText="Test"/>);

      const labelImage = await screen.findByRole('img');
      expect(labelImage).toHaveAttribute('src', 'gear-label.png');
      sinon.assert.notCalled(console.error);
    });
  });
});
