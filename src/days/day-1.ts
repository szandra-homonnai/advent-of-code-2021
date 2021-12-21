import { readFile } from "fs";
import * as path from 'path';

export function day1(): void {
  readFile(path.join(__dirname, '..', 'inputs/day-1.txt'), 'utf-8', (error: NodeJS.ErrnoException | null, result: string) => {
    if (error) {
      console.error(error);
      return;
    }

    const data: string[] = result.split('\r\n');
    let largerCount: number = 0;

    for (let index = 0; index < data.length; index++) {
      const previous = data[index - 1] ? parseInt(data[index - 1]) : null;
      const current = data[index] ? parseInt(data[index]) : null;

      if (previous !== null && current !== null && previous < current) {
        largerCount++;
      }
    }

    console.log('How many measurements are larger than the previous measurement?');
    console.log('The answer is %d', largerCount);
  });
}

