// JavaScript file: decodeEmail.js
document.addEventListener('DOMContentLoaded', function() {
    var encodedElements = document.querySelectorAll('.email-encode');

    encodedElements.forEach(function(element) {
        // Decoding the email text inside the element
        var encodedText = element.textContent;
        var decodedText = atob(encodedText);
        element.textContent = decodedText;

        // Decoding the email in the href attribute (if exists)
        var encodedHref = element.getAttribute('href');
        if (encodedHref && encodedHref.startsWith('mailto:')) {
            var encodedEmail = encodedHref.split(':')[1]; // Remove "mailto:"
            var decodedEmail = atob(encodedEmail);
            element.setAttribute('href', 'mailto:' + decodedEmail);
        }

        // Remove 'email-encode' class and add 'email-decode' class
        element.classList.remove('email-encode');
        element.classList.add('email-decode');
    });
});