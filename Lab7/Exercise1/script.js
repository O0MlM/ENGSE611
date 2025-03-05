// Selecting the button element correctly using its ID
let button = document.getElementById("changeTextButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Selecting the paragraph element
    let paragraph = document.getElementById("example");
    
    // Changing the text content of the paragraph
    paragraph.textContent = "New Text Content";
});
