import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function someFunction() {
  const userName = readlineSync.question('May I have your name? ');

  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
}
