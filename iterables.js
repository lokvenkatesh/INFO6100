/**
 * The input argument messages is an array containing a list of messages in the order
 * it was received from a message broker. This method removes the messages in the order
 * it was received from the array and prints word count in each message.
 *  Eg:
 *  const messages = ['Object created', 'Object is being processing', 'Object processing completed'];
 *  readMessages(messages);
 *  // 2, 4, 3
 *
 * @param {Array} messages the array of strings
 */
export const readMessages = (messages) => {
    messages.forEach(message => {
        const wordCount = message.split(' ').length;
        console.log(wordCount);
    });

}

/**
 * This method filters the items based on the predicate function and returns a new array with the
 * filtered items. This implementation should not use the Array.prototype.filter(). The predicate
 * function will return true if the item needs to returned and false if the item needs to be ignored.
 *
 * @param {Array} items the array of items
 * @param {Function} predicate the predicate function
 * @returns {Array} the new filtered array
 */
export const filter = (items, predicate) => { const filteredItems = [];
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



const messages = ['Object created', 'Object is being processed', 'Object processing completed'];
readMessages(messages);
// Expected output:
// 2
// 4
// 3


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, number => number % 2 === 0);
console.log(evenNumbers); // Expected output: [2, 4]