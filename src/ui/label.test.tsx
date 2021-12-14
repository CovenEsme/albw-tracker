import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Images from '../services/images';
import Label from './label';

describe('Label', () => {
  const labelTestId: string = "label-text";

  let testLabelText: string = "Test label text";

  describe('Render Label with various labelText values', () => {
    test('Console error rendering Label without labelText', () => {
      render(<Label />);

      expect(screen.getByTestId(labelTestId)).toBeInTheDocument();
    });

    test('Renders Label with string', () => {
      render(<Label labelText={testLabelText}/>);

      expect(screen.getByText(testLabelText)).toBeInTheDocument();
    });

    test('Console error rendering Label with null', () => {
      testLabelText = null;

      render(<Label labelText={testLabelText}/>);

      expect(screen.getByTestId(labelTestId)).toBeInTheDocument();
    });

    test('Renders Label with empty string', () => {
      testLabelText = "";

      render(<Label labelText={testLabelText}/>);

      expect(screen.getByTestId(labelTestId)).toBeInTheDocument();
    });
  });

  describe('Render Label image', () => {
    test('Renders Label image', async () => {
      await Images.importImages();

      render(<Label labelText={testLabelText}/>);

      const testLabelImage = await screen.findByRole('img');
      expect(testLabelImage).toHaveAttribute('src', 'tooltip-label.png');
    });
  });
});
