//Even or Odd
function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }

  //Big O is O(1) because it will only ever run once (the conditional).

  //Are you here?
  function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//Big O: Big O will be O(n^2) as we have a loop within a loop. 

//Doubler
function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//Big O: Due to the fact it has uh... looOOOOP in it, it's going to be
//linear. Soooooo it's running the length of the array so it's going to be
//linear. O(n)

//Naive Search
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//Big O: The function has a linear Big O O(n), because it takes proportionally longer
//the larger the data input is. 

//Creating Pairs
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
//Big O: O(n^2) because it's a nested loop, even if it technically doesn't run through
//the entire array for each j pair of i. 

// 0, 1, 2, 3, 4, 5
// 0-1, 0-2, 0-3, 0-4, 0-5
// 1-2, 1-3, 1-4, 1-5,
// 2-3, 2-4, 2-5
// 3-4, 3-5
// 4-5
createPairs(['1', '2', '3', '4', '5']);
createPairs(['1', '2', '3', '4', '5', '6']);

//Computing Fibonaccis
function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
  
      // we're adding the first item
      // to the result list, append the
      // number 0 to results
      if (i === 1) {
        result.push(0);
      }
      // ...and if it's the second item
      // append 1
      else if (i == 2) {
        result.push(1);
      }
  
      // otherwise, sum the two previous result items, and append that value to results.
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    // once the for loop finishes
    // we return `result`.
    return result;
  }

  //Despite the complexity of the function (two if conditionals and a last else statement)
  //the function ultimately has a Big O of O(n), because everything happening within the for
  //loop is simply pushing a value into an array

  //An Efficient Search
  function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
//Big O is O(logn), because the function is a binary search function (tests middle,
//then removes half the array from consideration based on result (or returns item if
//it matches))

//Random Element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//Big O is O(1) because it will only ever run one operation regardless of array size

// Is it prime?
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
//Big O is O(n) (linear) because in a worst case scenario isPrime has to 
//loop through all numbers between 2 and n (thus, growing consistently more 
//complicated as n gets larger)