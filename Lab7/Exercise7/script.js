// Selecting the element with the id "example"
let element = document.getElementById("example");

// Accessing the parent element
let parent = element.parentNode;
document.getElementById('outputConsole').textContent += "Parent element: " + parent.outerHTML + "\n";

// Accessing the child elements of the parent
let children = parent.children;
document.getElementById('outputConsole').textContent += "Child elements: " + children.length + " child elements\n";

// Accessing the next sibling element
let nextSibling = element.nextElementSibling;
document.getElementById('outputConsole').textContent += "Next sibling element: " + nextSibling.outerHTML + "\n";
