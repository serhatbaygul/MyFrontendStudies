let value;

const now = new Date()

const date1 = new Date("10-10-1999 11:14:00");

const date2 = new Date("October 10 1999");

const date3 = new Date("10/10/199");

value = date1;

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1995)

value = date1;







console.log(value);