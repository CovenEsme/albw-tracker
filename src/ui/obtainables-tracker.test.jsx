import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sinon from 'sinon';

import Helper from '../services/helper';
import OBTAINABLES from '../data/obtainables.json';
import ObtainablesTracker from './obtainables-tracker';
import TrackerState from '../services/tracker-state';

describe('ObtainablesTracker', () => {
  let testTrackerState;

  const testFunction = () => {};

  beforeEach(() => {
    sinon.stub(console, 'error');
    testTrackerState = TrackerState.default();
  });

  afterEach(() => {
    console.error.restore();
  });

  test('Exception rendering ObtainablesTracker without props', () => {
    let exception = null;

    try {
      render(<ObtainablesTracker />);
    } catch (te) {
      exception = te;
    }

    expect(exception).not.toBeNull();
    sinon.assert.called(console.error);
  });

  test('Console error rendering ObtainablesTracker with TrackerState', () => {
    render(<ObtainablesTracker
             trackerState={testTrackerState}
           />);

    sinon.assert.called(console.error);
  });

  test('Renders ObtainablesTracker with props', () => {
    render(<ObtainablesTracker
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
             trackerState={testTrackerState}
           />);

    sinon.assert.notCalled(console.error);
  });

  test('Renders ObtainablesTracker with all Obtainables', () => {
    render(<ObtainablesTracker
             trackerState={testTrackerState}
           />);

     for (var obtainable in OBTAINABLES) {
       const obtainableObject = screen.getAllByAltText(Helper.fancyName(obtainable, 0));

       expect(obtainableObject[0]).toBeInTheDocument();
     }
  });
});
