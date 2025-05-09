/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const counts = {};
  let yearArray = [];

  for (let asteroid of data.asteroids) {
    let year = asteroid.discoveryYear;
    yearArray.push(counts[year]);
    if (counts[year]) {
      counts[year]++;
    } else {
      counts[year] = 1;
    }
  }
  yearArray = Object.entries(counts).map(([year, count]) => {
    return { year: Number(year), count };
  });
  let maxYear = maxBy(yearArray, (item) => item.count);
  let result = maxYear.year;
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
