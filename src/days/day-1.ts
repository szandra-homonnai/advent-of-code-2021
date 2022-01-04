import { readFile } from "fs";
import * as path from 'path';

export function day1(): void {
  readFile(path.join(__dirname, '..', 'inputs/day-1.txt'), 'utf-8', (error: NodeJS.ErrnoException | null, result: string) => {
    if (error) {
      console.error(error);
      return;
    }

    const data: string[] = result.split('\r\n');
    const sumArray: number[] = [];
    let largerCount: number = 0;
    let sumLargerCount: number = 0;

    for (let index = 0; index < data.length; index++) {
      const previous = data[index - 1] ? parseInt(data[index - 1]) : null;
      const current = data[index] ? parseInt(data[index]) : null;
      const next = data[index + 1] ? parseInt(data[index + 1]) : null;
      const secondNext = data[index + 2] ? parseInt(data[index + 2]) : null;

      if (previous !== null && current !== null && previous < current) {
        largerCount++;
      }

      if (current !== null && next !== null && secondNext !== null) {
        sumArray.push((current + next + secondNext));

        const previousSum: number | undefined = sumArray.at(-2);
        const currentSum: number | undefined = sumArray.at(-1);

        if (previousSum !== undefined && currentSum !== undefined && previousSum < currentSum) {
          sumLargerCount++;
        }
      }
    }

    console.log('How many measurements are larger than the previous measurement?');
    console.log('The answer is %d', largerCount);

    console.log('Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?');
    console.log('The answer is %d', sumLargerCount);
  });
}

