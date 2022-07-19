//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
 
// var common = first.filter(x => second.indexOf(x) !== -1)
// console.log("The common elements are: " + common);


const compareThreeArrays = (arr1, arr2, arr3) => {
    return arr1.filter(e => arr2.includes(e) && arr3.includes(e));
}

let newArray = compareThreeArrays(arrNumber1, arrNumber2, arrNumber3);
console.log(newArray);
