// let js = 'amazing';
/* if (js === 'amazing') {
    alert('JavaScript is FUN!');
} */

/* console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Rishi";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let javaScriptIsFun = true;

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof false);

javaScriptIsFun = 'YES!';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1992;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Srivastava';
console.log(lastName);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = 'Rishi';
const lastName = 'Srivastava';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 😱');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');

console.log('23' - '10' - 3); // 10
console.log('23' + '10' - 3); // 2307
console.log(1991 + '23'); // 199123

console.log('23' * '2'); // 46
console.log('46' / '2'); // 23
console.log('23' > '10'); // true

// guess
let n = '1' + 1;
n = n - 1;
console.log(n); // 10



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('Height is defined!');
} else {
    console.log('Height is UNDEFINED!');
}



const age = 18;
if (age === 18) {
    console.log("You just became an adult 😎");
} else {
    console.log("Go and drink milk kid 😂");
}

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);



const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
*/

const day = "monday";
switch (day) {
  case "monday":
    console.log("Bench press day");
    break;

  default:
    console.log("not a valid day");
    break;
}
