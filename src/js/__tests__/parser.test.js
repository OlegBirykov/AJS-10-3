import read from '../reader';
import json from '../parser';

test('Функция json должна возвращать данные в формате JSON', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(await json(await read())).toBe(data);
});
