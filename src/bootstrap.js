import moment from "moment";

const twoWeeksFromNow = moment().add(2, 'weeks');

const sixMonthsAgo = moment().subtract(6, 'months');

console.log(twoWeeksFromNow.toString());
console.log(sixMonthsAgo.toString());



// const birthday = moment('2001-06-25', 'YYYY-MM-DD');

// console.log(birthday.fromNow());

// console.log(birthday.format('dddd'));
// console.log(birthday.format('dddd, MMM Do, YYYY'));