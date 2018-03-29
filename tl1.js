// Add JavaScript File
// array = todo list
// add/delete to that array using certain functions
// implement that into js

alert("Hi 👻"); 
alert("⬇ add a new item to the to-do list below ⬇");

// * initialize array 

// Set some dummy data
var fruits = ["Apples", "Oranges", "Peaches"];

// function that runs when the body element loads up
function windowLoads() {
    loadUnorderedList();
}

// Loads the fruits list to the site
function loadUnorderedList() {
    var ul = document.getElementById("fruits");

    // https://www.w3schools.com/jsref/met_node_appendchild.asp
    
    // For every fruit in the fruits array...
    for (var i = 0; i < fruits.length; i++) {

        // Create an li tag
        var node = document.createElement("LI");                 // Create a <li> node

        // Create a textnode that contains fruits[i] -> the current fruit element
        var textnode = document.createTextNode(fruits[i]);         

        // Append the textnode to the li tag - <li>TextNode</li> is essentially what's happening
        node.appendChild(textnode);                                     

        // Append the created <li>TextNode</li> to the <ul></ul> list from the page -> <ul><li>TextNode</li></ul>
        ul.appendChild(node);
    }
}

// Gets the value in the input box and adds it to the fruits array
function addInputToFruits() {

    // get the data typed from the input box
    var fruitBoxThingyValue = document.getElementById("fruitsInputBox").value;
    
    // Add the value from the input box to the fruits array
    fruits.push(fruitBoxThingyValue);
    
    // Check the contents of fruits
    console.log(fruits);
    var node = document.createElement("LI");             
    var textnode = document.createTextNode(fruitBoxThingyValue);    
    node.appendChild(textnode);                       
    document.getElementById("fruits").appendChild(node);  
