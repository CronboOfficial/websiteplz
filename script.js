document.getElementById('discordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var fullMessage = name + ": " + message;

    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.classList.add('clicked');

    fetch('https://discord.com/api/webhooks/1210339399309725727/1AvK7gP2ZDZGJgE5CcWprPdo2sLUlJbZUcZX9JNdeu25S2XIU7X_aBvqJIKLScHr_v8Q', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: fullMessage
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        document.getElementById('status').textContent = 'Message sent';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('status').textContent = 'Failed to send message';
    })
    .finally(() => {
        submitButton.classList.remove('clicked');
    });
});