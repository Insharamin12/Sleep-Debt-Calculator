// sleep-calculator.js

/**
 * A constant object mapping days to sleep hours.
 * Makes the code easier to maintain.
 */
const sleepHoursByDay = {
  Monday: 6,
  Tuesday: 6,
  Wednesday: 7,
  Thursday: 5,
  Friday: 6,
  Saturday: 7,
  Sunday: 8,
};

/**
 * Calculates the actual sleep hours for the week.
 * Uses the || 0 operator to default to 0 for undefined sleep hours.
 * @returns {number} The total actual sleep hours.
 */
function getActualSleepHours() {
  const daysOfWeek = Object.keys(sleepHoursByDay);
  return daysOfWeek.reduce((totalHours, day) => totalHours + (sleepHoursByDay[day] || 0), 0);
}

/**
 * Calculates the ideal sleep hours for the week.
 * @param {number} idealHoursPerNight - The ideal number of sleep hours per night (default is 8).
 * @returns {number} The total ideal sleep hours.
 */
function getIdealSleepHours(idealHoursPerNight = 8) {
  return idealHoursPerNight * 7;
}

/**
 * Calculates sleep debt and returns messages.
 * Makes it more versatile for further use or display.
 * @returns {string} A message indicating sleep debt or adequacy.
 */
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return 'You have got the perfect amount of sleep this week.';
  } else if (actualSleepHours > idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} hours more sleep than needed this week.`;
  } else {
    return `You got ${idealSleepHours - actualSleepHours} hours less sleep than needed this week. Get some rest.`;
  }
}

// The result of calculateSleepDebt is logged using console.log().
console.log(calculateSleepDebt());
