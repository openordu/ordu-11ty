document.addEventListener("DOMContentLoaded", function () {
    // Show/hide the button when scrolling
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        document.getElementById("back-to-top").style.display = "block";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    });
  
    // Scroll to the top when the button is clicked
    document.getElementById("back-to-top").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });