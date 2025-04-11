document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('body');

    // Show loader
    loader.style.display = 'block';
    mainContent.style.display = 'none';

    // Simulate loading process
    setTimeout(function() {
        // Hide loader
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Adjust the timeout duration as needed
});