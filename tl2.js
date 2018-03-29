// ? system part of project
// todo: type out substeps to achieve each number 
// todo: get the values from the html element into a variable in javascript for add and delete functions


// * Create a list (array) to store tasks

var tasks = ["Eat", "Game", "Sleep"];

// * load unordered list to site

function loadUnorderedList(){
    var ul = document.getElementById("tasks");
    // todo: HTML DOM appendChild() Method
    
    // * for every task in the tasks array...
    for (var i= 0; i < tasks.length;) i++){
        
        // * create an li tag 
        var node = document.createElement("LI");    //? Create a <li> node
        var textnode = document.createTextNode("Nap"); //? Create a text node
        node.appendChild(textnode); //? Append the text to <li>
        document.getElementById("tasks").appendChild(node); //? Append <li> to <ul> with id="tasks"
    }
}

// * Add the ability to add (push) to the array by creating a function

function addInput() {

    // * get new data typed from the input box
    var taskBox = document.getElementById(taskBoxInput).value;
    tasks.push(taskBox);      //? Adds new element "Nap" to tasks
}

// * Add the ability to delete (pop) from the array by creating a function
function removeInput() {
    tasks.pop(taskBox);     //? Removes the last element ("Nap")
}

// create an array
// load unordered list