# myMap- A Custom Implementation of Map Function in JavaScript

This repository contains a custom implementation of the `map` function in JavaScript. The `map` function takes an array and a callback function as inputs, applies the callback function to each element in the array, and returns a new array with the transformed elements.

## Getting Started

1. Clone the repository:
    ```sh
    git clone https://github.com/JeetChauhan17/myMap.git
    ```

2. Navigate to the project directory:
    ```sh
    cd myMap
    ```
3. Run the code:
    ```sh
    node myMap.js
    or
    bun myMap.js
    ```

## Implementation

The `myMap` function is implemented as follows:

```javascript
function myMap(arr, fn) {
    const finalArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let currVal = arr[i];
        const toPush = fn(currVal);
        finalArr.push(toPush);
    }
    return finalArr;
}
```
## Example Usage

### Normal Approach: 
```javascript
const arr = [1, 2, 3, 4, 5];

function transform(i) {
    return i * 2;
}

const normRes = myMap(arr, transform);
console.log("Result from myMap : normRes", normRes); // Output: [2, 4, 6, 8, 10]
```

### Cleaner Approach
```javascript
const cleanRes = myMap(arr, (i) => {
    return i * 3;
});
console.log("Result from myMap : cleanRes", cleanRes); // Output: [3, 6, 9, 12, 15]
```

## Why Use map?
The map function transforms each element of an array using a provided function and returns a new array with the transformed elements. This is particularly useful when you need to apply the same operation to each element in an array. For instance, if you want to transform a single number, you can do that easily, but to transform each element of an array, the map function is very handy.

 In the examples above, the transform function is used to return a new array with all elements multiplied by 2 or 3.

## Contributing

If you want to contribute, feel free to do so. Just Submit a Pull Request or open an Issue to suggest add more types or improve the existing code :)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
