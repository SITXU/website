document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = `Thank you, ${name}! We have received your message.`;
    
    // Clear the form after submission
    document.getElementById('contactForm').reset();
});