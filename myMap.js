// ASSIGNMENT: Create a map function which takes an array and a function/callback as an input and applies the function to each element and returns the output/

function myMap(arr, fn) {
    const finalArr = []
    
    for(let i=0; i<arr.length; i++){
        let currVal = arr[i]
        
        const toPush = (fn(currVal))
        finalArr.push(toPush)
        
    }
    return finalArr
}



// Example case: NORMAL APPROACH: 

const arr = [1,2,3,4,5]

function transform(i){
    return i*2
}
const normRes = myMap(arr,transform)
console.log("Result from myMap : normRes",normRes);




// CLEANER APPROACH: 

const cleanRes = myMap(arr, (i)=>{
    return i*3
})
console.log("Result from myMap : cleanRes",cleanRes);


// WHY USE MAP?
// Map takes each value of an array and transforms them using the function and then gives the result, This is the main usage of map function. 
// If you want to transform a sinmgle number you can do that very easily but to transform each element of an array, that's when the map function is used.

// HERE, function transform() will be used to return the transformed array which will be all the elements of the array multiplied by 2