 // Wait for the DOM to be fully loaded
 document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links that use hash navigation
    const navLinks = document.querySelectorAll('.navbar .list ul li a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent the default anchor behavior
        event.preventDefault();
  
        // Extract target id from the href attribute (skip the '#' character)
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Check if the target element exists on the page
        if (targetSection) {
          // Scroll smoothly to the target section
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  document.querySelector('.btn').addEventListener('click', function () {
    const details = document.getElementById('event-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});  