import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // eslint-disable-next-line no-console
  console.log(saving);
}).catch((error) => {
  // eslint-disable-next-line no-alert
  alert(error);
});
