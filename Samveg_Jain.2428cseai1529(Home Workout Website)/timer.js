const timerElement = document.getElementById("timer");

// Initial countdown time in seconds
let countdownTime = 600; // Example: 10 minutes

// Function to update the timer
function updateTimer() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  // Update the timer display
  timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Decrease time or stop the timer
  if (countdownTime > 0) {
    countdownTime--;
  } else {
    clearInterval(timerInterval); // Stop when time is up
    timerElement.textContent = "Time's Up!";
    redirectToNewPage(); // Redirect to another page
  }
}

// Function to handle page redirection
function redirectToNewPage() {
  window.location.href = "again.html"; // Change to your desired URL or file path
}

// Start the timer interval
const timerInterval = setInterval(updateTimer, 1000);

// Initialize the timer display
updateTimer();

