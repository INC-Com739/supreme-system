'use strict';
// This script is used to handle the form submission and validation for the HTML5 form
// It checks if the form is filled out before allowing submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('html5-form').addEventListener('submit', function(event) {
        const submit = document.getElementById('submit').value;
        if (submit === '') {
            alert('Please fill out the form before submitting.');
            event.preventDefault(); // Prevent form submission
        }
    });
    document.getElementById('js-form').addEventListener('submit', function(event) {
        const jsUsername = document.getElementById('js-username').value;
        if (jsUsername.length < 5) {
            alert('Username must be at least 5 characters long.');
            event.preventDefault(); // Prevent form submission
        }
    });
    document.getElementById('js-form').addEventListener('submit', function(event) {
        const jsPassword = document.getElementById('js-password').value;
        if (jsPassword.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault(); // Prevent form submission
        }
    });
    document.getElementById('js-form').addEventListener('submit', function(event) {
        const jsEmail = document.getElementById('js-email').value;
        if (!jsEmail.includes('@')) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
        }
    });
    document.getElementById('js-form').addEventListener('submit', function(event) {
        const jsPhone = document.getElementById('js-phone').value;
        if (isNaN(jsPhone)) {
            alert('Please enter a valid phone number.');
            event.preventDefault(); // Prevent form submission
        }
    });
    document.getElementById('js-form').addEventListener('submit', function(event) {
        const jsAddress = document.getElementById('js-address').value;