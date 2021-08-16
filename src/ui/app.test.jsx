import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import App from './app';
import Helper from '../services/helper';
import Images from '../services/images';

import OBTAINABLES from '../data/obtainables.json';
import OBTAINABLES_INFO from '../data/test-obtainables-info.json';
import FANCY_TO_GENERIC_INFO from '../data/test-fancy-to-generic-info.json';

describe('App', () => {
  const loadingSpinnerLabel = "audio-loading";


  describe('App initialization', () => {
    beforeEach(() => {
      sinon.stub(console, 'error');
    });

    afterEach(() => {
      console.error.restore();
    });

    test('Renders App with loading spinner while initializing', () => {
      render(<App />);

      expect(screen.getByLabelText(loadingSpinnerLabel)).toBeInTheDocument();
      expect(screen.queryByAltText('Gear overlay')).toBeNull();
      expect(screen.queryByAltText('Items overlay')).toBeNull();
      expect(screen.queryByAltText('Label')).toBeNull();
      sinon.assert.notCalled(console.error);
    });

    test('Renders App with tracker after initializing', async () => {
      render(<App />);

      expect(screen.getByLabelText(loadingSpinnerLabel)).toBeInTheDocument();

      expect(await screen.findByAltText('Gear overlay')).toBeInTheDocument();
      expect(screen.getByAltText('Items overlay')).toBeInTheDocument();
      expect(screen.getByAltText('Label')).toBeInTheDocument();
      sinon.assert.notCalled(console.error);
    });
  });


  describe('App interaction with Obtainables', () => {
    beforeEach(async () => {
      render(<App />);

      expect(screen.getByLabelText(loadingSpinnerLabel)).toBeInTheDocument();
      expect(await screen.findByAltText('Gear overlay')).toBeInTheDocument();
    });

    test('Renders App with all Obtainables and their images', () => {
      for (var text in OBTAINABLES_INFO) {
        const obtainable = screen.getByAltText(text);

        expect(obtainable).toBeInTheDocument();
        expect(obtainable).toHaveAttribute('src', OBTAINABLES_INFO[text][0]);
      }
    });

    test('Left clicking sword cycles forwards through its images', () => {
      const sword = screen.getByAltText("Forgotten Sword");

      expect(sword).toHaveAttribute('src', 'sword-0.png');

      fireEvent.click(sword);
      expect(sword).toHaveAttribute('src', 'sword-1.png');

      fireEvent.click(sword);
      expect(sword).toHaveAttribute('src', 'sword-2.png');

      fireEvent.click(sword);
      expect(sword).toHaveAttribute('src', 'sword-3.png');

      fireEvent.click(sword);
      expect(sword).toHaveAttribute('src', 'sword-4.png');

      fireEvent.click(sword);
      expect(sword).toHaveAttribute('src', 'sword-0.png');
    });

    test('Right clicking sword cycles backwards through its images', () => {
      const sword = screen.getByAltText("Forgotten Sword");

      expect(sword).toHaveAttribute('src', 'sword-0.png');

      fireEvent.contextMenu(sword);
      expect(sword).toHaveAttribute('src', 'sword-4.png');

      fireEvent.contextMenu(sword);
      expect(sword).toHaveAttribute('src', 'sword-3.png');

      fireEvent.contextMenu(sword);
      expect(sword).toHaveAttribute('src', 'sword-2.png');

      fireEvent.contextMenu(sword);
      expect(sword).toHaveAttribute('src', 'sword-1.png');

      fireEvent.contextMenu(sword);
      expect(sword).toHaveAttribute('src', 'sword-0.png');

      fireEvent.contextMenu(sword);
      expect(sword).toHaveAttribute('src', 'sword-4.png');
    });

    test('Left clicking each Obtainable changes to next image', () => {
      for (var text in OBTAINABLES_INFO) {
        const obtainable = screen.getByAltText(text);
        const srcLength = Object.keys(OBTAINABLES_INFO[text]).length

        for (var srcIndex = 0; srcIndex < srcLength; srcIndex++) {
          let srcNumber = srcIndex + 1;

          fireEvent.click(obtainable);

          if (srcNumber == srcLength) {srcNumber = 0;}

          expect(obtainable).toHaveAttribute(
                               'src', OBTAINABLES_INFO[text][srcNumber]);
        }
      }
    });

    test('Right clicking each Obtainable changes to previous image', () => {
      for (var text in OBTAINABLES_INFO) {
        const obtainable = screen.getByAltText(text);
        const srcLength = Object.keys(OBTAINABLES_INFO[text]).length

        for (var srcIndex = srcLength - 1; srcIndex >= 0; srcIndex--) {
          let srcNumber = srcIndex;

          fireEvent.contextMenu(obtainable);

          expect(obtainable).toHaveAttribute(
                               'src', OBTAINABLES_INFO[text][srcNumber]);
        }
      }
    });

    test('MouseOver sword shows fancy name in label, mouseOut clears', () => {
      const sword = screen.getByAltText("Forgotten Sword");
      const labelText = screen.getByTestId("label-text");

      expect(labelText).toBeInTheDocument();
      expect(screen.queryByText("Forgotten Sword")).not.toBeInTheDocument();

      fireEvent.mouseOver(sword);
      expect(screen.getByText("Forgotten Sword")).toBeInTheDocument();

      fireEvent.mouseOut(sword);
      expect(screen.queryByText("Forgotten Sword")).not.toBeInTheDocument();
    });

    test('MouseOver each Obtainable shows fancy name in label', () => {
      const labelText = screen.getByTestId("label-text");
      expect(labelText).toBeInTheDocument();

      for (var text in OBTAINABLES_INFO) {
        const obtainable = screen.getByAltText(text);

        expect(screen.queryByText(text)).not.toBeInTheDocument();

        fireEvent.mouseOver(obtainable);
        expect(screen.getByText(text)).toBeInTheDocument();

        fireEvent.mouseOut(obtainable);
        expect(screen.queryByText(text)).not.toBeInTheDocument();
      }
    });

    test('Clicking sword changes labelText', () => {
      const sword = screen.getByAltText("Forgotten Sword");
      const labelText = screen.getByTestId("label-text");

      expect(labelText).toBeInTheDocument();
      expect(screen.queryByText("Forgotten Sword")).not.toBeInTheDocument();

      fireEvent.mouseOver(sword);
      expect(screen.getByText("Forgotten Sword")).toBeInTheDocument();

      // There should be no change for the first click.
      fireEvent.click(sword);
      expect(screen.getByText("Forgotten Sword")).toBeInTheDocument();

      fireEvent.click(sword);
      expect(screen.queryByText("Forgotten Sword")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword")).toBeInTheDocument();

      fireEvent.click(sword);
      expect(screen.queryByText("Master Sword")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword Lv2")).toBeInTheDocument();

      fireEvent.click(sword);
      expect(screen.queryByText("Master Sword Lv2")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword Lv3")).toBeInTheDocument();

      fireEvent.click(sword);
      expect(screen.queryByText("Master Sword Lv3")).not.toBeInTheDocument();
      expect(screen.getByText("Forgotten Sword")).toBeInTheDocument();

      fireEvent.contextMenu(sword);
      expect(screen.queryByText("Forgotten Sword")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword Lv3")).toBeInTheDocument();

      fireEvent.contextMenu(sword);
      expect(screen.queryByText("Master Sword Lv3")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword Lv2")).toBeInTheDocument();

      fireEvent.contextMenu(sword);
      expect(screen.queryByText("Master Sword Lv2")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword")).toBeInTheDocument();

      fireEvent.contextMenu(sword);
      expect(screen.queryByText("Master Sword")).not.toBeInTheDocument();
      expect(screen.getByText("Forgotten Sword")).toBeInTheDocument();

      fireEvent.contextMenu(sword);
      expect(screen.getByText("Forgotten Sword")).toBeInTheDocument();

      fireEvent.contextMenu(sword);
      expect(screen.queryByText("Forgotten Sword")).not.toBeInTheDocument();
      expect(screen.getByText("Master Sword Lv3")).toBeInTheDocument();
    });

    test('Clicking each Obtainable changes labelText', () => {
      const labelText = screen.getByTestId("label-text");
      expect(labelText).toBeInTheDocument();

      for (var text in OBTAINABLES_INFO) {
        const obtainable = screen.getByAltText(text);
        const obtainableName = FANCY_TO_GENERIC_INFO[text];
        const srcLength = Object.keys(OBTAINABLES_INFO[text]).length

        expect(screen.queryByText(text)).not.toBeInTheDocument();

        fireEvent.mouseOver(obtainable);
        expect(screen.getByText(text)).toBeInTheDocument();

        // Left clicks.
        for (var srcIndex = 0; srcIndex < srcLength; srcIndex++) {
          let srcNumber = srcIndex + 1;

          // There should be no change for the first click.
          fireEvent.click(obtainable);

          if (srcNumber == srcLength) {srcNumber = 0;}

          const fancyName = Helper.fancyName(obtainableName, srcNumber);
          expect(screen.getByText(fancyName)).toBeInTheDocument();
        }

        // Right clicks.
        for (var srcIndex = srcLength - 1; srcIndex >= 0; srcIndex--) {
          let srcNumber = srcIndex;

          fireEvent.contextMenu(obtainable);

          const fancyName = Helper.fancyName(obtainableName, srcNumber);
          expect(screen.getByText(fancyName)).toBeInTheDocument();
        }

        fireEvent.mouseOut(obtainable);
        expect(screen.queryByText(text)).not.toBeInTheDocument();
      }
    });
  });
});
