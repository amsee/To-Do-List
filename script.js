// * initialize array  

var fruit = [
    "pear", 
    "apple", 
    "peach", 
    "strawberry", 
    "kiwi"
];

// * apend new value to array
fruit.push("dragonfruit")

// // Create a "close" button and append it to each list item

var liTags = document.getElementsByTagName("LI");
var i;
for (i = 0; i < fruit.length; i++) {
//   alert(fruit[0])
  console.log(fruit[i]);
}
