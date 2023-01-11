// Five different ways to loop

const basket = ['apples', 'oranges', 'grapes'];

//1
for ( i = 0; i < basket.length; i++ ) {
    console.log(basket);
}

//2
basket.forEach(item => {
    console.log(item);
})

//3 while/do while loop

// for of
// Iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// enumerating - objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in basket) {
    console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99]; // should return 100
const array2 = ['1', 3, 4, 2]; // should return 4
const array3 = []; // should return 0

// SOLUTIONS TO QUESTION #1

// LOOP 1
function biggestNumberInArray(arr) {
    letbiggest = 0;
    for (item of arr) {
        if (item > biggest) {
            biggest = item;
        }
    }
    console.log(biggest);  // returns 100
};

// LOOP 2
function biggestNumberInArray2(arr2) {
    let biggest2 = 0;
    for ( i = 0; i < arr2.length; i++) {
        if (arr2[i] > biggest2) {
            biggest2 = arr2[i];
        }
    }
    console.log(biggest2);  // returns 4
};

// LOOP 3
function biggestNumberInArray3(arr) {
    let biggest3 = 0
    arr.forEach(item => {
        if (item > biggest3) {
            biggest3 = item;
        }
    })
    console.log(biggest3);  // returns 0
};


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

// SOLUTIONS
function checkBasket(basket, lookingFor) {
    for (item in basket) {
      if (item === lookingFor) {
        return `${lookingFor} is in your basket`
      }
    }
    return 'that does not exist in your basket'
  }