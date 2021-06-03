![CF](https://i.imgur.com/7v5ASc8.png) array.reduce()
=======
## Overview

```js
const result = arr.reduce((accumulator, value, index) => {
  // ...
}, initialValue);
``` 

### Basics

`.reduce()` iterates over an array and returns the last version of the "accumulator" ... in each iteration, based on the value and/or idx of the current element in the array, you have the opportunity to modify and return the accumulator. After the last iteration of the array, that accumulator value is returned to the caller. `initialValue` represents the value of the accumulator in the first iteration.


**Add up all the numbers in an array**

In this example, the accumulator starts out as 0 (the initial value) and for each iteration, we simply add onto it, and then return it.  That return value gets fed into the next iteration so that you can continually operate on it and return the final value.

```js
const numbers = [1,2,3,4];
const sum = numbers.reduce((accumulator, value, idx) => {
  accumulator = accumulator + value;
  return accumulator;
}, 0);

// sum would be 10
```

**Change the shape of you data**

In this example, we'll take an array of objects and return back an object, keyed by the 'name' property. The initial value is an empty object, and as we iterate, we create a new entry in it, returning it as we build on. 

```js
  const people = [
    { name:'Fred', role:'Developer' },
    { name:'Suzy', role:'Developer' },
    { name:'Gina', role:'Manager' },
    { name:'Jim', role:'Support' }
  ];
  
  const folks = people.reduce((accumulator, person, idx) => {
    accumulator[person.name] = person.role;
    return accumulator;
  }, {});
  
  // folks: 
  { 
    Fred: 'Developer',
    Suzy: 'Developer',
    Gina: 'Manager',
    Jim: 'Support'
  }
  
```

## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [Medium](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)

/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + 1;
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named eyeColorTally that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value is the number of characters having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */
// let result = {};
// for(let i = 0; i < arr.length; i++){
//     if(!result[arr[i].eye_color]){
//         result[arr[i].eye_color] = 1;
//     } else {
//         result[arr[i].eye_color] = result[arr[i].eye_color] + 1;
//     }
 
// }

export const eyeColorTally = (arr) => {
    const res = arr.reduce((result, name)=>{
        if(!result[name.eye_color]){
            result[name.eye_color] = 1;
        } else {
            result[name.eye_color] = result[name.eye_color] + 1;
        }
        return result;
        
    }, {});
    return res;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value an array of character names having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorNames = (arr) => {
    const res = arr.reduce((obj, name)=>{
        if(!obj[name.eye_color]){
            obj[name.eye_color] = [name.name];
        } else {
            obj[name.eye_color].push(name.name);
        }
        return obj;
    }, {});
    return res;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */


export const countNumberOfChildren = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

export const calculateAverage = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
};

export const countPrimeNumbers = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named effortStats that, given the snorlaxData uses reduce to return an object with the 
minimum and maximum effort level in the format:

Hint: The accumulator should begin as { min: 0, max: 0 }

------------------------------------------------------------------------------------------------ */

export const effortStats = (statName, arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

export const extractChildren = (arr) => {
  // Solution code here...
};
