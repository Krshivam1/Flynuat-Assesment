// 1)find duplicate and same values in two array
// var fullWordList = ["1", "2", "3", "4", "5"];
// var wordsToRemove = ["1", "2", "3"];

//Solution 1 -
//Loop through both the arrays and check if the values are same

const findDuplicates = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }

    return result;
};

let fullWordList = ["1", "2", "3", "4", "5"];
let wordsToRemove = ["1", "2", "3"];

const result = findDuplicates(fullWordList, wordsToRemove);
console.log(result); //  OUTPUT - [ '1', '2', '3' ]

// 2nd solution
// create a map from all the values of the first array and then loop through the second array to check if the values are already present in the map

const findDuplicateValues = (arr1, arr2) => {
    let duplicates = [];
    let mp = new Map();
    for (let i = 0; i < arr1.length; i++) {
        if (mp.has(arr1[i])) {
            mp.set(arr1[i], mp.get(arr1[i]) + 1);
        } else {
            mp.set(arr1[i], 1);
        }
    }

    arr2.forEach((item) => {
        if (mp.has(item)) {
            duplicates.push(item);
        }
    });

    return duplicates;
};

let arr1 = ["1", "2", "3", "4", "5"];
let arr2 = ["1", "2", "3"];

const res = findDuplicateValues(arr1, arr2);
console.log(res); //  OUTPUT - [ '1', '2', '3' ]