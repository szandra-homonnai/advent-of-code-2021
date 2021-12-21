// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/

import { day1 } from './days/day-1';
import chalk = require('chalk');
import readline = require("readline");
// import prompt = require('prompt');

console.log(chalk.blue('Welcome to Advent of Code 2021!\r\n'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chooseDay(): void {
  rl.question(chalk.blue('Which day do you want to choose? (1) '), (day: string) => {
    switch (day) {
      case '1':
        day1();
        rl.close();
        break;
      default:
        console.error(`I don't have any solution for this day :(`);
        break;
    }
  });
}

chooseDay();
