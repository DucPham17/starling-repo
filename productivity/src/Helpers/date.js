export const toISOString = (date) => date.toISOString().substring(0, 10);

export const dateToPresentableString = (date) => date.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

export const addDaysToDate = (date, days) => new Date(date.getTime() + days * 86400000);

// Source: https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date#:~:text=To%20get%20the%20date%20of,getDate()%3B%20const%20dayOfTheWeek%20%3D%20date.
export const getMondayNthWeekFromNow = (n) => {
    const today = new Date(new Date().getTime() + n * 7 * 86400000);
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(today.setDate(diff));
};