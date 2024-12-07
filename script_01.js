// Get elements
const proposeButton = document.getElementById("proposeButton");
const modal = document.getElementById("modal");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const reconsiderModal = document.getElementById("reconsiderModal");
const reconsiderYesButton = document.getElementById("reconsiderYesButton");
const reconsiderNoButton = document.getElementById("reconsiderNoButton");


// Show the modal when the "Propose" button is clicked
proposeButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    // Redirect to the celebration page with a smooth transition
    window.location.href = "celebrate.html";
});



// Handle "No" button click and show reconsideration modal
noButton.addEventListener("click", () => {
    modal.style.display = "none";
    reconsiderModal.style.display = "flex";
    window.location.href = "sad.html";
});

// Handle "Yes" for reconsideration (user decides to reconsider)
reconsiderYesButton.addEventListener("click", () => {
    reconsiderModal.style.display = "none";
    modal.style.display = "flex"; // Show the original modal again for them to change their answer
});

// Handle "No" for reconsideration (user is sure)
reconsiderNoButton.addEventListener("click", () => {
    alert("Oh no! You said No for sure!");
    reconsiderModal.style.display = "none"; // Close reconsideration modal
});




