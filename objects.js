
/**
 * This function deep clones any JavaScript object and returns the cloned object.
 * No extrenal library should be use to implement this.
 *
 * @param {Object} objectToClone the object to clone.
 * @returns {Object} the cloned object
 */
export const clone = (objectToClone) => {
    // Check if the item is a primitive or a function, return it as is
  if (objectToClone === null || typeof objectToClone !== 'object') {
    return objectToClone;
  }

  // Handle Date (create a new Date with the same time)
  if (objectToClone instanceof Date) {
    return new Date(objectToClone.getTime());
  }

  // Handle Array (create a deep clone of each item)
  if (Array.isArray(objectToClone)) {
    return objectToClone.map(item => clone(item));
  }

  // Handle Object (recurse on each property)
  if (objectToClone instanceof Object) {
    const clonedObject = {};
    for (const key in objectToClone) {
      if (objectToClone.hasOwnProperty(key)) {
        clonedObject[key] = clone(objectToClone[key]);
      }
    }
    return clonedObject;
  }

  // If it's a type not yet handled (like a function, Map, or Set), return it directly.
  // Extending the function to handle these cases specifically might be necessary.
  return objectToClone;




}


// Assuming the clone function is defined in the same file or imported
// import { clone } from './path/to/your/cloneFunction';

// Test with primitive types
const number = 42;
const clonedNumber = clone(number);
console.log(number === clonedNumber); // true, primitive values are copied

// Test with an array
const array = [1, 2, [3, 4], { a: 'A' }];
const clonedArray = clone(array);
console.log(array !== clonedArray); // true, different references
console.log(array[2] !== clonedArray[2]); // true, deep clone
console.log(array[3] !== clonedArray[3]); // true, deep clone
console.log(JSON.stringify(array) === JSON.stringify(clonedArray)); // true, content is the same

// Test with an object
const object = { num: 42, arr: [1, 2, 3], nested: { a: 'A' } };
const clonedObject = clone(object);
console.log(object !== clonedObject); // true, different references
console.log(object.arr !== clonedObject.arr); // true, deep clone
console.log(object.nested !== clonedObject.nested); // true, deep clone
console.log(JSON.stringify(object) === JSON.stringify(clonedObject)); // true, content is the same

// Test with a date
const date = new Date();
const clonedDate = clone(date);
console.log(date !== clonedDate); // true, different references
console.log(date.getTime() === clonedDate.getTime()); // true, same time value
