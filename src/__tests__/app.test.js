import sortPlayers from '../js/user';

test('should return correct value', () => {
  const returnValue = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  expect(sortPlayers(data)).toEqual(returnValue);
  expect(sortPlayers(data)).not.toBe(returnValue);
});
