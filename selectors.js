/**
* A Node represents an HTML Element. A node can have a tag name, a list of CSS
* classes and a list of children nodes.
*/
class Node {

    /**
     *
     * @param {String} tag the tag name
     * @param {Array} children the children nodes
     * @param {Array} classes the css classes
     * @param {String} id the node id
     */
    constructor(tag, children, classes,id) {
      // Tag name of the node.
      this.tag = tag;
      // Array of CSS class names (string) on this element.
      this.classes = classes;
      // Array of child nodes.
      this.children = children; // All children are of type Node
      this.id = id;
    }

    /**
    * Returns all nodes matching the class selector.
    *
    * For example:
    *
    * <div class="container">
    *   <div id="box-1" class="box"></div>
    *   <div id="box-2" class="box">
    *       <div id="box-2-1" class="box"></div>
    *   </div>
    *   <div id="box-3" class="box">
    *     <div class="content"></div>
    *   </div>
    * </div>
    * Selector `box` should return 4 div nodes in this order
    * box-1 -> box-2-1 -> box-2 -> box-3.
    *
    * @param {string} the selector string.
    * @returns {Array} Array of selected nodes.
    * @public
    */

    search(selector) {
      
      let result = [];

        // Check if the current node matches the selector.
        if (this.classes.includes(selector)) {
            result.push(this);
        }

        // Recursively search in each child node.
        for (let child of this.children) {
            result = result.concat(child.search(selector));
        }

        return result;
    }
}


//testing usecase

// Create nodes for the example structure
const nodeBox21 = new Node('div', [], ['box'], 'box-2-1');
const nodeContent = new Node('div', [], ['content'], '');
const nodeBox3 = new Node('div', [nodeContent], ['box'], 'box-3');
const nodeBox2 = new Node('div', [nodeBox21], ['box'], 'box-2');
const nodeBox1 = new Node('div', [], ['box'], 'box-1');
const nodeContainer = new Node('div', [nodeBox1, nodeBox2, nodeBox3], ['container'], '');

// Search for nodes with the class 'box'
const boxes = nodeContainer.search('box');

// Output the IDs of the nodes found to check if they match the expected order
console.log(boxes.map(box => box.id));