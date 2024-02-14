export const filter = (items, predicate) => {const filteredItems = [];
    // Iterate over each item in the input array
    for (let item of items) {
       // Apply the predicate function to the current item
       if (predicate(item)) {
           // If the predicate returns true, add the item to the result array
           filteredItems.push(item);
       }
   }

   // Return the filtered array
   return filteredItems;

}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, number => number % 2 === 0);
console.log(evenNumbers); // Expected output: [2, 4]