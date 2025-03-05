const exercises = [
    "Changing Text Content",
    "Modifying CSS Styles",
    "Adding and Removing Classes",
    "Creating and Appending Elements",
    "Removing Elements",
    "Handling Events",
    "Traversing the DOM",
    "Manipulating Form Elements",
    "Fetching and Displaying Data",
    "Animations and Transitions"
];

const tableBody = document.getElementById("exerciseTable");

exercises.forEach((exercise, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>Exercise ${index + 1}: ${exercise}</td>
        <td><button class='show-btn' onclick='openExercise(${index + 1})'>Show me</button></td>
    `;
    tableBody.appendChild(row);
});

function openExercise(exerciseNumber) {
    window.open(`exercise${exerciseNumber}`, '_blank');
}

function toggleProfileImage() {
    let img = document.getElementById("profileImg");
    img.classList.toggle("enlarged");
}
