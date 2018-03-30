// todo: CREATE ARRAY

// * Create list
// * Assign array to variable

var fruits = ["Apples", "Peaches", "Pear"];

// todo: ADD TO ARRAY

// * Create function to add variable to array

function addInput(){
    // * Create variable to get element through id="textbox" 
    // ? Pull element through the id called "textbox"
    var fruitList = document.getElementById("textbox");
    // * Create variable to add value to array
    // ? Add to array after data input
    var value = fruitList(value);
    // * Append (push) variable to array
    // ? When "Add To-Do" button is clicked, run add addInput() function
    fruits.push(value);

    // todo: ADD TO HTML 
    // ? <UL> 
    // ?        <LI>     
    // ? </UL>

    // * Create <li> tag within function 
    // * Create new variable holding <li> node 
    // ? The variasble li holds the element created within the <li>
    var li = document.createElement("LI");

    // * Create text node
    // * Create new variable holding new text 
    // ? The variable holds the value of the new text created by user
    var text = document.createTextNode(value);

    // todo: APPEND <LI>

    // * Append new <li> tag 
    // ? Append <li> tag to li with new user input
    li.appendChild(text);
    // ? Get elememt through the id="taskbox" and append <li> tag in li
    document.getElementById("taskbox").appendChild(li);

}