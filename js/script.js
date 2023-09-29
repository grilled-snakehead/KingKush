document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("age-verification");
    var yesBtn = document.getElementById("yesBtn");
    var noBtn = document.getElementById("noBtn");

    // Function to hide the overlay and modal
    function hideOverlayAndModal() {
        overlay.style.display = "none";
        modal.style.display = "none";
    }

    // Handle the "Yes" button click
    yesBtn.addEventListener("click", function () {
        // Display the content of the page (You can replace this with your own logic)
        // For demonstration purposes, we'll simply hide the overlay and modal
        hideOverlayAndModal();
    });

    // Handle the "No" button click
    noBtn.addEventListener("click", function () {
        // Redirect to an error page (You can replace this with your own URL)
        // For demonstration purposes, we'll redirect to a placeholder URL
        window.location.href = "html/age-error.html";
    });
});
