/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc += 1;
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
    return arr.reduce((acc, curr) => {
        if(!acc[curr.eye_color]){
            acc[curr.eye_color] = 1;
        } else acc[curr.eye_color] += 1;

        return acc;
    }, {});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value an array of character names having that 
eye color:

{ blue: ["luke skywalker"]}
------------------------------------------------------------------------------------------------ */

export const eyeColorNames = (arr) => {
    return arr.reduce((acc, curr) => {
        if(!acc[curr.eye_color]){
            acc[curr.eye_color] = [curr.name];
        } else acc[curr.eye_color] = [...acc[curr.eye_color], curr.name];
        return acc;
    }, {});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */


export const countNumberOfChildren = (arr) => {
  // Solution code here...
    return arr.reduce((acc, curr) => {
        if(curr.children){
            acc = acc + curr.children.length;
        }
        return acc;
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

export const calculateAverage = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    // return acc / arr.length;
    }, 0) / arr.length;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {

};

export const countPrimeNumbers = (arr) => {
  // Solution code here...
    return arr.reduce((acc, curr) => {
        if(curr % 2 !== 0 && curr > 1){
            acc = acc + 1;
        }
        return acc;
    }, 0);
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

export const flattenArray = (arr) => {
    return arr.reduce((acc, curr) => {
        return [...acc, ...curr];
    });
};

export const flattenDeepArray = (arr) => {
    return arr.reduce((acc, curr) => {
        if(Array.isArray(curr)){
            // acc = [...acc, flattenDeepArray(curr)];
            // acc = acc.concat(flattenDeepArray(curr));
            const deepNest = flattenDeepArray(curr);
            acc = [...acc, ...deepNest];
        }
        else acc = [...acc, curr];
        return acc;
    }, []);
};
