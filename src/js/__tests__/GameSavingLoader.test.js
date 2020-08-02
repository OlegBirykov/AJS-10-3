import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Метод load должен создавать объект типа GameSaving', async () => {
  const gameSaving = {
    id: 123,
    created: 968455,
  };

  const data = '{"id":123,"created":968455}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }

  read.mockResolvedValue(buffer);
  await expect(GameSavingLoader.load()).resolves.toEqual(gameSaving);
});

test('Метод load должен выдавать ошибку', async () => {
  read.mockRejectedValue(new Error('Ошибка'));
  await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка');
});
