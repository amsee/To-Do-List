// * create an array
var tasks = ["eat", "sleep", "nap"];

function addInput(){    

    var taskList = document.getElementById("textbox");
    var value = taskList.value;
    
    // Adds to the array
    tasks.push(value); //? add 'any' datatype
    
    // Add to html
    var li = document.createElement("LI");    //? Create a <li> node
    var textFromInputBox = document.createTextNode(value); //? Create a text node

    // create <li>textFromInputBox</li>
    li.appendChild(textFromInputBox); //? Append the text to <li>

    // <ul>
    //   <li>textFromInputBox</li>
    // </ul>
    document.getElementById("taskBox").appendChild(li); //? Append <li> to <ul> with id="tasks"
}