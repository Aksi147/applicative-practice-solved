/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";

function getGreatestDiscoveryYear(data) {
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
  maxYear = maxBy(yearArray, (item) => item.year);
  result = maxYear.year;
  return result;
}

console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// THIS IS AN OLDER FUNCTION I WANT TO SAVE JUST IN CASE.
/* function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const counts = {};
  for (let asteroid of data.asteroids) {
    let year = asteroid.discoveryYear;
    if (counts[year]) {
      counts[year]++;
    } else {
      counts[year] = 1;
    }
  }

  let maxYear = null;
  let maxCount = 0;

  //different variant of my maxBy() function

  for (let year in counts) {
    if (counts[year] > maxCount) {
      maxYear = year;
      maxCount = counts[year];
    }
  }

  return Number(maxYear);
} */
