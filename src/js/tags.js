document.addEventListener("DOMContentLoaded", function() {
    const buttons = Array.from(document.querySelectorAll('.category-button'));
    const pills = Array.from(document.querySelectorAll('.rounded-pill'));
    const allElements = [...buttons, ...pills];
    
    // Create an Intersection Observer to watch for when elements become visible
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('pulsate');
            // Optional: stop watching the element after it starts pulsating
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1.0 });  // Adjust the threshold as needed
  
    // Start observing each element
    allElements.forEach(el => {
      observer.observe(el);
    });
  });
  