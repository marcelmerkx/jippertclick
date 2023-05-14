let counter = 0;

// Function to increment the counter
function increment() {
  // Increment the counter
  counter += 1;

  document.getElementById("counter").innerHTML = counter;

  // Return the counter
  console.log(counter);
}