
import { updateTimes } from '../App';

test('updateTimes returns the updated times when UPDATE_TIMES action is provided', () => {
  const initialState = [
    '17:00',
    '18:00',
  ];

  const action = { 
    type: 'SET_TIMES',
    payload: {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      date: '2024-08-14',
    }
  };

  const result = updateTimes(initialState, action);
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  expect(result.availableTimes).toEqual(expectedTimes);
});


