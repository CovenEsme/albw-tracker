import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Label from './label';
import Images from '../services/images';

describe('Label', () => {

  describe('Render Label with starting values', () => {

    test('Renders Label with string', async () => {
      const labelText = "Test label text";

      render(<Label labelText={labelText}/>);

      expect(screen.queryByText(labelText)).toBeInTheDocument();
    });

    test('Renders Label with null', async () => {
      const labelText = null;

      render(<Label labelText={labelText}/>);

      expect(screen.queryByTestId("label-test")).toBe(null);
    });

    test('Renders Label with empty string', async () => {
      const labelText = "";

      render(<Label labelText={labelText}/>);

      expect(screen.queryByTestId("label-test")).toBeNull();
    });
  });
});
