document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }

    // Simulate sending message
    const responseElement = document.getElementById('formResponse');
    responseElement.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseElement.style.color = 'green';

    // Reset the form
    document.getElementById('contactForm').reset();
});
