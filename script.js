// AFTER CONTAINER

// * create list (array)
var tasks = ["Sleep", "Eat", "Game"];


// * create a function to increment new element added to list
function addNewInput(){

    // * create a variable that holds the element got through ID
    var taskList = document.getElementById("textbox")
    
    // AFTER ONCLICK
    
    // * select new element to append to array when "Add To-Do" button is clicked
    var value = taskList.value;

    // * add (push) elements to To-Do list
    tasks.push(value);     

    // <UL> / <LI> tags
    // * create new variable holding <li> node
    // * create new <li> tag
    var li = document.createElement("LI");
    // * create new variable holding new text
    var text = document.createTextNode(value);
    
    // APPEND <li> TAG
    // * append the new text to <li>
    li.appendChild(text);
        
    document.getElementById("taskbox").appendChild(li);
}
