// Array of roles/descriptions to display
const roles = ["Full-Stack Developer", "Web Enthusiast", "Tech Explorer", "JavaScript Lover"];
let currentRoleIndex = 0;
const multipleTextElement = document.querySelector(".multiple-text");

// Function to update the text
function updateText() {
    multipleTextElement.textContent = roles[currentRoleIndex];
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Cycle through the roles
}

// Call the function every 2 seconds to change the text
setInterval(updateText, 2000);
