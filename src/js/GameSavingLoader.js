import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((buffer) => json(buffer)).then((string) => {
        resolve(JSON.parse(string));
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
