document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
    // Reset the form (optional)
    document.getElementById("contactForm").reset();
});
