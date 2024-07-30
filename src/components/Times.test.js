
import { initializeTimes, updateTimes } from '../App';

test('initializeTimes returns the correct array of times', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same state when no action is provided', () => {
  const state = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const action = { type: '' }; // No action provided
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});

test('updateTimes returns the updated times when UPDATE_TIMES action is provided', () => {
  const initialState = [
    '17:00',
    '18:00',
  ];
  const action = { type: 'UPDATE_TIMES' };
  const result = updateTimes(initialState, action);
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  expect(result).toEqual(expectedTimes);
});
